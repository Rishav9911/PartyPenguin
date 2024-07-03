const { errorHandler } = require('../error')
const bcrypt = require('bcryptjs');
const ORGANISER= require('../models/organiser')

async function HandleOrganiserSignUp(req,res,next){

    const {name,email,phone,organisationName,yourRole,password}=req.body

    if(!name||!email||!phone||!organisationName || !yourRole||!password){
        return next(new errorHandler("Please fill all the details!", 400))
    }
    const result_email=await ORGANISER.findOne({email:email})
    if(result_email){
        return next(new errorHandler("Email already exists!", 400))
    }
    const result_phone=await ORGANISER.findOne({phone:phone})
    if(result_phone){
        return next(new errorHandler("Phone already exists!", 400))
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 8)
        await ORGANISER.create({ name, email, phone,organisationName,yourRole, password:hashedPassword });
        return res
          .status(200)
          .json({ success: true, message: "Sign Up successfully" });
      } catch (error) {
        if (error.name === "ValidationError") {
          const validationErrors = Object.values(error.errors).map(
            (err) => err.message
          );
          return next(new errorHandler(validationErrors.join(" , ",400)))
        }
      }
}
async function HandleOrganiserLogin(req,res,next)
{
    const {email,password}=req.body
    if(!email||!password){
        return next(new errorHandler("Please fill all the details!", 400))
    }
    const result=await ORGANISER.findOne({email:email})
    if(!result)
        {
            return next(new errorHandler("Email doesnot exist!", 400))
        }
    const isMatch = await bcrypt.compare(password, result.password);
    if(!isMatch){
        return next(new errorHandler("Incorrect Password!", 400))
    }
        return res
          .status(200)
          .json({ success: true, message: "Login successfully" });

}
module.exports={
    HandleOrganiserSignUp,
    HandleOrganiserLogin
}