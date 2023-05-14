const voterModels = require("../models/voterModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const PRIVATE_KEY = "CS-447";


exports.validateVoter = async (req, res, next)=>{
    const {name} = req.params;
    const {phone} = req.query;
    const data = await voterModels.find();

    if (!/^[0-9]{10}$/.test(phone)) {
        return res.send("Please provide a proper phone number");
    }

    let item = data.find(x => x.name === name && x.phone === phone)
    if(item){
        return res.send("Already voted!")
    }
    next();
}

exports.voteNow = (req, res)=>{
    const {name} = req.params;
    const {address, phone} = req.query
    const data = req.body;
    
    voterModels.insert(name, address, phone, data.president, data.vice_president);

    res.send("Voted 👍");
}

exports.summary = async (req, res) =>{
    let data = await voterModels.find();
    let candidates = {
        president:{},
        vice_president:{}
    };

    for(let i=0; i< data.length; i++){
        let countPresident = 0;
        let countVicePresident = 0;
        for(let j=0; j<data.length; j++){
            if(data[i].president == data[j].president){
                countPresident++;
            }
            if(data[i].vice_president == data[j].vice_president){
                countVicePresident++;
            }
        }
        candidates.president[data[i].president] = countPresident;
        candidates.vice_president[data[i].vice_president] = countVicePresident;
    }
   
    let president;
    let maxCountP = 0;
    for(let each in candidates.president){
        if(candidates.president[each] > maxCountP){
            president = each;
            maxCountP = candidates.president[each];
        }
    }
    let vice_president;
    let maxCountVP = 0;
    for(let each in candidates.vice_president){
        if(candidates.vice_president[each] > maxCountVP){
            vice_president = each;
            maxCountVP = candidates.vice_president[each];
        }
    }

    candidates.currentWinner = {president,vice_president};;

    res.send(candidates);
}

exports.allData = async (req, res)=> {
    const data = await voterModels.find();
    res.send(data)
}

exports.update = async (req, res)=> {
    const {name} = req.params;
    const {phone} = req.params;
    
    const data = await voterModels.find({});
    let item = data.find(x => x.name == name && x.phone == phone)
    if(!item){
        return res.send("user doesn't exist");
    }
    voterModels.updateOne(item.president, item.vice_president, req.body.president, req.body.vice_president);
    
    res.send(data);
}

exports.voterInfo = async (req, res) =>{
    const data = await voterModels.find();
    const {name} = req.params;
    const {phone} = req.query;
    
    let item = data.find(x => x.name == name && x.phone == phone);
    if(!item){
        return res.send("User doesn't exist");
    }
    res.send(item);
}

exports.signUp =async (req, res) =>{
    const data =await voterModels.find();
    const {name, phone} = req.body;
    const item = data.find(x => x.name == name && x.phone == phone);
    if(!item){
        return res.send({success: false, message:"Invalid username or phone number"});
    }
    let token = jwt.sign({
        address: item.address,
        president: item.president,
        vice_president: item.vice_president
    },PRIVATE_KEY);
    res.send({success: true, token: token});
}

exports.validateToken = (req, res, next) =>{
    if(!req.headers.authorization){
        return next(new Error("please add token"));
    }
    const arr = req.headers.authorization.split(" ");
    if(arr.length != 2){
        return next(new Error("please use bearer schema"));
    }
    const token = arr[1];
    try{
        let voter = jwt.verify(token, PRIVATE_KEY);
        req.phone = voter.phone;
        next();
    }catch(error){
        return res.send({success: false, data:{message: "Invalid token"}});
    }
}
exports.login = async (req, res) =>{
    const data =await voterModels.find();
    const {phone, name} = req.body;
    const item = data.find(x => x.phone == phone);
    if(!item){
        return res.send("Invalid phone number");
    }
    if(bcrypt.compareSync(name, item.name)){
        return res.send("Invalid username");
    }
    const token = jwt.sign({
        name:item.name,
        address: item.address,
        phone: item.phone
    }, PRIVATE_KEY);
    res.send("login success");
}

exports.delete = async (req, res) =>{
    const {name, phone} = req.params;
    const data = await voterModels.find();
    const item = data.find(x=>x.name == name && x.phone == phone);
    if(!item){
        return res.send("user doesn't exist");
    }
    voterModels.delete(item.name);
    res.send("vote deleted");
}