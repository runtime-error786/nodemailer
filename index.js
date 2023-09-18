let express = require("express");
let app = express();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'skye.kassulke@ethereal.email',
        pass: '3dwpU8XqmR8wdZXGwK'
    }
});

let sen = async (req,res)=>{
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Mustafa musu jaan" <mustafa782a@gmail.com>', // sender address
      to: "f219085@cfd.nu.edu.pk", // list of receivers
      subject: "text message nodemailer work", // Subject line
      text: "Hello mustafa my name is hamza", // plain text body
      html: "<b>Hello mustafa my name is mustafa</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    res.send(info);
  }

app.get("/",(req,res)=>{
    res.send("hello from musu server");
});

app.get("/email",sen);


app.listen(6001);