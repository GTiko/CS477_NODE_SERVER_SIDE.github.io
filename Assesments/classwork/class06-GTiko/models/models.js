const COLLECTION_NAME = "voters";

class Voter{
    static async load(db){
        const data = await db.collection(COLLECTION_NAME).find({}).toArray();
        return data;
    }
    static async save(vote, db){
        await db.collection(COLLECTION_NAME).insertOne(vote);
        return;
    }
    static async saveVote(name, data, db){
        await db.collection(COLLECTION_NAME).updateOne({name:name}, {$set:data})
        return;
    }
}

module.exports = Voter;