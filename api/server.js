import express from 'express'
import cors from 'cors'
import pkg from 'body-parser'
const { json } = pkg

const app = express()
app.use(cors())
app.use(json())

app.post('/submit', (req, res) => {
  console.log('Received form data:', req.body)
  res.json({ message: 'Form data received successfully!' })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
