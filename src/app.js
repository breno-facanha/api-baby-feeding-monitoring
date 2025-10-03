const express = require('express')
const app = express()
const port = 3020
const mamadasRouter = require('./routes/mamada.routes');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/mamada', mamadasRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
