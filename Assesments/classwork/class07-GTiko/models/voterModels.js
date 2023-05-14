const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    president: String,
    vice_president:String,
    name:{type: String, require: true},
    address:String,
    phone: String
});

const UserModel = mongoose.model('user', UserSchema);

class Voter{

   static async find(){
        try{
            const data = await UserModel.find({});
            return data;
        }catch(error){
            console.log(error)
        }
    }

    static async insert(name, address, phone, president, vice_president){
        try{
            const user = new UserModel({
                 name: name,
                 phone: phone,
                 address: address,
                 president: president,
                 vice_president: vice_president
            });
            const data = await user.save();
            return data;
        }catch(error){
            console.log(error)
        }
    }

    static async updateOne(op, ovp, president, vice_president){
        try{
            await UserModel.updateOne({president: op, vice_president: ovp},{
                president: president,
                vice_president: vice_president
            });
        }catch(err){
            console.log(err)
        }
    }

    static async delete(item){
        try {
            await UserModel.deleteOne({name: item})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Voter;