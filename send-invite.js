const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-invite', async (req, res) => {
  const { to } = req.body;

  // Configure your email transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'azezalgodgarv@gmail.com',
      pass: 'xlqkmvojpnqzaruj', // App Password (no spaces)
    },
  });

  const mailOptions = {
    from: 'azezalgodgarv@gmail.com',
    to,
    subject: '27th July – Surprise at Kiteblu Café ❤️',
    text: `Hey Khushi,

Block your date for 27th July—the surprise is set, and I’ve added it to your Google Calendar already:
👉 View Calendar Invite
https://calendar.app.google/WCMUtKXV78k4egh98
We’ll meet at Kiteblu Café, Tambaram. Here’s the exact location:
📍 Kiteblu Café on Google Maps
https://maps.app.goo.gl/DsdVs8rEgyT1FAXM9
I won’t spoil the magic, but I promise it’s going to be a memorable day. Just bring your beautiful smile and all your excitement. ❤️

Counting down the days already,`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email', error: err });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 