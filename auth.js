const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 587, 
  secure: false, 
  auth: {
    user: "sunilnumetry07@gmail.com", // Your Gmail address
    pass: "wfxtppezeyjhjhmw", 
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Sunil Kumar 👻" <sunilnumetry07@gmail.com>', // sender address
    to: "shahsunilkumar373@gmail.com, shahsurajkumar373@gmail.com", // list of receivers
    subject: "Hello this code send for the nodejsmailer ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello Sunil this side to send email </b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
