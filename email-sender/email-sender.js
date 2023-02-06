const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465, 
    secure: true, 
    auth: {
      user: "test1@gmail.com", 
      pass: "*****", 
        },
  });
  
  let info = await transporter.sendMail({
    from: 'Yassine Jabri <test1@gmail.com>',
    to: "test2@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    `,
  });

  console.log(info.messageId); 
}

main()
.catch(err => console.log(err));