const CONNECTION_NAME = "STUDENTS";

exports.checkSchoolUnique = async (req, res, next)=>{
    const {code} = req.body;
    let db = req.db;
    const item = await db.collection(CONNECTION_NAME).find({code});
    if(item){
        return next(new Error("School code already exist!"))
    }
    next();
}

