const mongoose=require('mongoose')

mongooseConnect=()=>{
    mongoose.connect(process.env.mongo_URI,{
        dbName:"partyPenguin"
    }).then(()=>{
        console.log("Database successfully connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=mongooseConnect;
