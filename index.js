const express = require("express");

var cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const router = express.Router();

app.use(router);

const getAllNotice = require("./src/controller/getAllNotice")

const postNotice = require("./src/controller/notice.controller")

const createUser = require("./src/controller/register.controller")

router.use("/all",getAllNotice)

router.use("/post",postNotice)

router.use("/user",createUser)

const connect = require("./src/config/db");

const port =  process.env.PORT || 8000;

app.get("/" , async (req,res)=>{
  res.send("working")
})

app.listen(port, async () => {
    try {
      await connect();
      console.log(`listening to port ${port}`);
    } 
    catch (error) {
      console.log(error);
      console.log("hello")
    }
});