const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Event = require("./models/event");
const UserRouter = require("./routes/user");
const OrganiserRouter = require("./routes/organiser");
const EventRouter = require("./routes/event");
const mongooseConnect = require("./connect");
const { errorMiddleWare } = require("./error");
const cookieParser = require("cookie-parser");
const paymentRoute = require("./routes/paymentRoutes");
const { checkAuthentication } = require("./middlewares/user-auth");
const app = express();
dotenv.config({ path: "./config.env" });
const path = require("path");


//connecting to frontend
app.use(
  cors({
    origin: [process.env.frontend_URL],
    methods: "POST,GET",
    credentials: true,
  })
);

//middlewears
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes

app.use("/user", UserRouter);
app.use("/organiser", OrganiserRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//payment
app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) => {
  console.log("id",process.env.RAZORPAY_API_KEY);
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});


app.use(checkAuthentication);
app.use("/event", EventRouter);
app.get("/logout", (req, res) => {
  if (req.cookies.uid != undefined) res.clearCookie("uid");
  else res.clearCookie("aid");
  return res.json({ msg: "Logout Successful" });
});


//mongoose connection
mongooseConnect();

app.use(errorMiddleWare);

app.listen(process.env.PORT, () => {
  console.log("server started at port ", process.env.PORT);
});
