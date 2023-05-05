import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { name, email, phone, company, subject, message } = req.body;
  var messageData;
  const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "contact.redblox@gmail.com",
      pass: "whkxxqzmgmtuquyg",
    },
  });

  messageData = `
  <div style="
    font-size: 20px;
    background: white;
    padding: 2rem;
    width: 100%;
    line-height:2.5
  ">
  <div>Name: ${name}</div> \n
  <div>Phone: ${phone}</div>\n 
  <div>Email: ${email}</div>\n 
  <div>Company: ${company}</div>\n 
  <div>Message: ${message}</div>\n 
  </div>
  `;

  try {
    (async () => {
      await mailer.sendMail({
        from: email,
        to: 
        "contact@redblox.io, saptha@redblox.io, tabrez@redblox.io, pricilla@redblox.io",
        subject: company || message,
        html: messageData,
      });
      return res.status(200).json({ status: true, error: null });
    })();
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || error.toString(), status: false });
  }
}
