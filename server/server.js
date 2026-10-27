
const express = require('express')
const cors = require('cors')
const { Resend } = require('resend')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.disable('x-powered-by')

// Дозволені адреси frontend
const allowedOrigins = new Set([
  'https://www.tesliukfinance.com',
  'https://tesliukfinance.com',
  'http://localhost:5173',
])

// Дозволяємо основні домени та preview-домени Vercel
const corsOptions = {
  origin: (origin, callback) => {
    // Запити без Origin, наприклад серверні запити
    if (!origin || allowedOrigins.has(origin)) {
      return callback(null, true)
    }

    // Дозволяємо preview-домени Vercel цього проєкту
    if (
      /^https:\/\/financial-consultant-[a-z0-9-]+\.vercel\.app$/i.test(
        origin,
      )
    ) {
      return callback(null, true)
    }

    console.warn(`CORS: origin не дозволено: ${origin}`)
    return callback(null, false)
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 204,
}

app.use(cors(corsOptions))

app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

// Перевірка роботи сервера
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running!',
  })
})

// Надсилання заявки з контактної форми
app.post('/api/contact', async (req, res) => {
  const { name, phone, email, message } = req.body

  // Перевіряємо обов'язкові поля
  if (!name || !phone || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Будь ласка, заповніть усі поля форми.',
    })
  }

  console.log('Нова заявка:', {
    name,
    phone,
    email,
  })

  try {
    const { data, error } = await resend.emails.send({
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

    if (error) {
      console.error('Resend повернув помилку:', error)

      return res.status(500).json({
        success: false,
        message: 'Не вдалося надіслати заявку. Спробуйте пізніше.',
      })
    }

    console.log('Лист успішно передано Resend:', data?.id)

    return res.json({
      success: true,
      message: 'Заявку успішно надіслано',
    })
  } catch (error) {
    console.error('Помилка відправлення email:', error)

    return res.status(500).json({
      success: false,
      message: 'Не вдалося надіслати заявку. Спробуйте пізніше.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
