const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const PORT = 5000

app.disable('x-powered-by')

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)

app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

app.get('/', (req, res) => {
  res.json({
    message: 'Server is running!',
  })
})

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, message } = req.body

  console.log('Нова заявка:')
  console.log({
    name,
    phone,
    email,
    message,
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: 'Нова заявка на консультацію',
      text: `
Нова заявка на безкоштовну консультацію.

Ім'я: ${name}
Телефон: ${phone}
Email: ${email}

Повідомлення:
${message}
      `,
    })

    res.json({
      success: true,
      message: 'Заявку успішно надіслано',
    })
  } catch (error) {
    console.error('Помилка відправлення email:', error)

    res.status(500).json({
      success: false,
      message: 'Не вдалося надіслати заявку',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})