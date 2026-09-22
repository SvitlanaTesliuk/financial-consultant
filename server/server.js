const express = require('express')
const cors = require('cors')
const { Resend } = require('resend')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.disable('x-powered-by')

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        origin.startsWith('https://financial-consultant-jq63b4im3-svitlanas-projects-5093437e.vercel.app') ||
        origin === 'http://localhost:5173'
      ) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  }),
)

app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

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
    await resend.emails.send({
  from: 'onboarding@resend.dev',
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