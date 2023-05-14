const bcrypt = require("bcryptjs");
const vModel = require("../model/vmode");

exports.validateVoter = (req, res, next) =>{
    const {phone} = req.query;
    const data = vModel.load();
    for(let each of data){
        if(bcrypt.compareSync(phone, each.phone)){
            return next(new Error("This voter already voted"));
        }
    }
    next();
};