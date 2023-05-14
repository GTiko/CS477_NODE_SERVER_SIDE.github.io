const modules = require("../models/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = "APP";

exports.displayAllVoters = async (req, res) =>{
    res.send(await modules.load(req.db));
}

exports.validateVoter = async (req, res, next) =>{
    const {name, phone} = req.body;
    const data = await modules.load(req.db);
    const item = data.find(voter=>voter.name==name && voter.phone==phone);
    if(item){return next(new Error("Already voted!"));}
    next();
}

exports.signUp = async (req, res) =>{
    const {phone, password, name, address} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const vote = {name:name, phone: phone, address:address, password:hashedPassword}
    const token = jwt.sign({phone:phone, name:name, address:address},PRIVATE_KEY)
    modules.save(vote, req.db);
    res.send(token);
}

exports.signIn = async (req, res, next) =>{
    const {name, password} = req.body;
    const data = await modules.load(req.db);
    const item = data.find(x=>x.name == name);
    if(!item){
        return next(new Error("Invalid username"))
    }
    if(!bcrypt.compareSync(password, item.password)){
       return next(new Error("Invalid password"))
    }
    res.send(item)
}

exports.validateToken = async (req, res, next) =>{
    if(!req.headers.authorization){
       return next(new Error("please add token"));
    }
    const arr = req.headers.authorization.split(" ");
    if(arr.length != 2){
        return next(new Error("please use bearer"));
    }
    const token  = arr[1];
    try {
        let voter = jwt.verify(token, PRIVATE_KEY)
        req.name = voter.name
        next();
    } catch (error) {
        return next(new Error("Wrong token"));
    }
}

exports.voteNow = async (req, res) =>{
    modules.saveVote(req.body.name, req.body, req.db)
    res.send("vote added");
}

exports.validateUser = async (req, res, next)=>{
    const data = await modules.load(req.db);
    const item = data.find(x=>data.name == req.body.name);
    if(!item){
        return next(new Error("user doesn't exist"));
    }
    next();
}