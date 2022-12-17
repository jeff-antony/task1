const express= require("express");
require("./db/config");
const Contact = require('./db/Contact')
const app = express();

app.use(express.json());
// app.use(cors());

app.post("/contact",async(req,resp)=>{

    let contact = new Contact(req.body);
    let result = await user.save();
    resp.send("result")
})

app.listen(5000);