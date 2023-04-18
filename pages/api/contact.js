import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { name, email, phone, company, subject, message } = req.body;
  console.log(phone, "phone");
  var messageData;
  const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "testuserus12@gmail.com",
      pass: "gajj bzny idau nxdx",
    },
  });

  messageData = `name: ${name} \n email: ${email} \n phone: ${phone} \n company: ${company} \n message: ${message}`;

  try {
    (async () => {
      await mailer.sendMail({
        from: email,
        to: "contact@redblox.io, saptha@redblox.io, tabrez@redblox.io, pricilla@redblox.io",
        subject: company || subject,
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
