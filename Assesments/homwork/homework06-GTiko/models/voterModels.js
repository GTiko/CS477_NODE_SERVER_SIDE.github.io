const path = require("path");
const fs = require("fs");

class Voter{
    static getPath(){
        return (path.join(__dirname, "data.json"))
    }
    static load(){
        const file = this.getPath();
        const data = require(file);
        return data;
    }
    static save(voter){
        const file = this.getPath();
        const data = this.load();
        data.push(voter)
        fs.writeFileSync(file,JSON.stringify(data),(err)=>{
            if(err) console.log("first")
        });
    }
    static saveData(data){
        const file = this.getPath();
        fs.writeFileSync(file,JSON.stringify(data),(err)=>{
            if(err) console.log("first")
        });
    }
}

module.exports = Voter;