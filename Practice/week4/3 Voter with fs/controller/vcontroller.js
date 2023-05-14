const bcrypt = require("bcryptjs");
const vModel = require("../model/vmode");

exports.saveVoter = (req, res) =>{
    try {
        const {name} = req.params;
        let {address, phone} = req.query;
        const {president, vPresident} = req.body;
    
        address = bcrypt.hashSync(address, 3);
        phone = bcrypt.hashSync(phone, 3);
        
        const data = vModel.load();
        data.push({
            name:name,
            phone:phone,
            address:address,
            vote:{
                president:president,
                vPresident:vPresident
            }
        });
        vModel.saveVoter(data);
        res.send("Voted!");
    } catch (error) {
        res.send(error.message);
    }
};