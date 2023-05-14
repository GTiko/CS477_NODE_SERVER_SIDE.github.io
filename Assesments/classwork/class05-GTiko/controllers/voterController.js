const voterModels = require("../models/voterModels");

exports.signUp =(req, res) => {
    res.send(voterModels.load());
}

exports.validateVoter=(req, res, next)=>{
    const {name} = req.params;
    const {phone} = req.query;
    const data = voterModels.load();

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

    data.name = name;
    data.address = address;
    data.phone = phone;
    
    voterModels.save(data);

    res.send("Voted 👍");
}

exports.summary = (req, res) =>{
    let data =  voterModels.load();
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

    let currentWinner = {president,vice_president};

    candidates.currentWinner = currentWinner;

    res.send(candidates)
}

exports.allData =(req, res)=> {
    const data = voterModels.load()
    res.send(data)
}

exports.update = (req, res)=> {
    const data = voterModels.load();
    const {name} = req.params;
    const {phone} = req.params;
    let item = data.find(x => x.name == name && x.phone == phone)
    if(item){
        item.president = req.body.president;
        item.vice_president = req.body.vice_president;
    }
    voterModels.saveData(data);
    res.send(data);
}

exports.voterInfo = (req, res) =>{
    const data = voterModels.load();
    const {name} = req.params;
    const {phone} = req.query;
    
    let item = data.find(x => x.name == name && x.phone == phone);
    if(!item){
        return res.send("User doesn't exist");
    }
    res.send(item);
}