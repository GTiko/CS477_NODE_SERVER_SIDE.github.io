const fs = require("fs");
const path = require("path");
const fileName = "data.json";

class Voter{
    static getPath(){
        return path.join(__dirname, fileName);
    }
    static load(){
        return require(this.getPath());
    }
    static saveVoter(data){
        try {
            const file = this.getPath();
            fs.writeFileSync(file, JSON.stringify(data), (err)=>{
                if(err) console.log("error on saving")
            });
        } catch (error) {
            return null;
        }
    }
}

module.exports = Voter