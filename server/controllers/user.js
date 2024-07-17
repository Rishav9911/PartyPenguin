const { errorHandler } = require("../error");
const bcrypt = require("bcryptjs");
const USER = require("../models/user");
const { setUser } = require("../services/auth");
async function HandleUserSignUp(req, res, next) {
  
  console.log("in signin backend");
  const { Name, email, phone, dateOfBirth, password } = req.body;
  const name = Name;
  if (!name || !email || !phone || !dateOfBirth || !password) {
    return next(new errorHandler("Please fill all the details!", 400));
  }
  const result_email = await USER.findOne({ email: email });
  if (result_email) {
    return next(new errorHandler("Email already exists!", 400));
  }
  const result_phone = await USER.findOne({ phone: phone });
  if (result_phone) {
    return next(new errorHandler("Phone already exists!", 400));
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    await USER.create({
      name,
      email,
      phone,
      dateOfBirth,
      password: hashedPassword,
    });
    return res
      .status(200)
      .json({ success: true, message: "Sign Up successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new errorHandler(validationErrors.join(" , ", 400)));
    }
  }
}
async function HandleUserLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new errorHandler("Please fill all the details!", 400));
  }
  const result = await USER.findOne({ email: email });
  if (!result) {
    return next(new errorHandler("Email doesnot exist!", 400));
  }
  const isMatch = await bcrypt.compare(password, result.password);
  if (!isMatch) {
    return next(new errorHandler("Incorrect Password!", 400));
  }
  const token=setUser(result,"user");
  res.cookie('uid',token,{
    httpOnly:true,
  });
  return res.status(200).json({ success: true, message: "Login successfully" });
}
module.exports = {
  HandleUserSignUp,
  HandleUserLogin,
};
