const express = require('express')
const serveStatic = require('serve-static')
const port = process.env.PORT || 3000
const app = express()

app.use(serveStatic('./src'))

app.listen(port, () => {
  console.log(`Http server listening on port ${port}`)
})
