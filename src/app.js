const express = require('express')

const app = express()

const port = process.env.PORTA || 3333

app.get('/', (req, res) => res.type('html').send(html))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
