const express = require('express')
const app = express()
const port = 3000

app.get('/sayhello', (request, response) => {
  console.log('saying hello....')
  response.end('Hello World\n');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

