import mongoose  from "mongoose";
// const uri="mongodb+srv://h4325932:SpiderVerse@cluster1.semf3id.mongodb.net/Blogger?retryWrites=true&w=majority"
const uri ="mongodb+srv://h4325932:SpiderVerse@cluster1.semf3id.mongodb.net/Blogger?retryWrites=true&w=majority"

export const initDb = async()=>{
    const db = await mongoose.connect(uri).then(()=>{
        console.log("Connected to DataBase Successfully")
    }).catch((error)=>{
        console.error(error)
    })
}

initDb();


