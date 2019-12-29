const express = require('express')
const app = express()
const port = 3000

app.patch('/v2/unitContents/121.1.1/contentItems', (request, response) => {
  console.log(request)
  var request = require('request');
  var data = '{"request" : "msg"}';
  var json_obj = JSON.parse(data);
  request.patch ({
      headers: {'content-type': 'application/json', 
      'Authorization': 'JWT Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhcHBsaWNhdGlvbiIsInN1YiI6InByb3BlcnR5LWNvbnRlbnQtc2VydmljZS10ZXN0LXJ3Iiwic2NwIjoiSU5URVJOQUwsSU5URVJOQUxfSE9NRUFXQVksUFJPUEVSVFlfQ09OVEVOVF9XUklURSxQUk9QRVJUWV9DT05URU5UX1JFQUQsUENTX1JFQURfT05MWSIsImlzcyI6ImFwaS1hdXRoLXYyIiwiZXhwIjoxNTUyNTc3MDEwLCJpYXQiOjE1NTE5NzIyMTAsImp0aSI6ImZiNmFhYTY2LWJmODgtNGNlMC05OTIxLWEwNjliNjZlNzFjMSIsImNpZCI6ImYwYzVmZmQ4LTcyMWQtNDk5ZC04ZjQxLWFmMWY2MzIxNjgxYiJ9.LdFFeCcFCrAcN5XOHAgBm22QlyIj62-XVgccoIgQJJSv3WKxekS68dbMJyBa1Z849WraiaVZyLEustK9h9Lu4CanOj9GENQ5LFwJhqgcm2S_DS_Cth2tr2b_1N3KUPPoKrzFHBU2awvkTmUqi6ymNNd6tODkAiR0P5vnM7ZVod44a6C8YY5jJwbAdHLloAoVVLpAxIVw0tsFf4G8utYGKlhhwj56a7R3dDxwIGFPsKySFkI2wS8AmAiUK_qhtFhRYWp0-7uBpEf1H0HQ9R98y3LS5pu4XtsAFXu3dR-ujT3YY_gdLywNLkvDG17AYlkFBgLXLmQLtUA-uEybzzPF0Q', 
      'X-HA-USER-JWT': 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0NTA3Y2U4MC1mNjA2LTRiYWUtOTE0Ny1mMjMxZGEzNDY2MjIiLCJjcmVkZW50aWFscyI6eyJwcmluY2lwYWwiOnsidXNlclV1aWQiOiI0NTA3Y2U4MC1mNjA2LTRiYWUtOTE0Ny1mMjMxZGEzNDY2MjIiLCJwdWJsaWNVdWlkIjoiNjgxZTViMWEtMzAxYi00N2YzLWE4YWItNmQ3Yzc3ZTkxNjM4Iiwic2NvcGVzIjpbIkFVVEhFTlRJQ0FURUQiXX0sInN1YmplY3QiOnsidXNlclV1aWQiOiI0NTA3Y2U4MC1mNjA2LTRiYWUtOTE0Ny1mMjMxZGEzNDY2MjIifX0sImlzcyI6InVtcyIsImV4cCI6MTU1MjAxODE3NywiaWF0IjoxNTUyMDE3ODc3LCJqdGkiOiI2YmZiYzI3OC1lMjAzLTRkNWEtYjFjOC0xN2RmOTE1YjFlODIifQ.EXK_ivgMybRZv8FCKg0Vx558bPOAy-VUWVjCFDZLngpi8T8crEAm_q8HdD8Z7VHuddg0vATi8hed897Jbqin4uXKWOPj_BMt1rCg7bkXmgauLhyP_aDQHZaiwZ9UrZEOo1vTKUhC_CjNxBcasDR-m5UfvbQrQNRNqSJCFnO3y9nMRyVjUiwzR_jNt8ep9LgWzxBSU1JrwyoVIIuzjJjB1chLmp7grAmH2qaoFyRBdpZ_ARpqhxqZUjkLeh0-vMgVLlroXy40eidi2FkK6v4DFmneegsPAJ_QaLjpkr39HZcRWnSeob3McPvzVysJDECtlJ_6yYEc3QRKNjMaqCfh3w'},
      url: 'http://localhost:8080/v2/unitContents/121.1.1/contentItems',
      data:'[]'
      // form: json_obj
  }, function(error, response, body){
    console.log(body)
  });
})

app.get('/sayhello', (request, response) => {
  console.log('saying hello....')
  response.end('Hello World\n');
})

app.get('/get301', (request, response) => {
  console.log('redirecting from get301....')
  response.redirect(301, '/301redirected');
})

app.get('/301redirected', (request, response) => {
  console.log('get301 redirected')
  response.send('GET 301redirected')
})

app.get('/get307', (request, response) => {
  console.log('redirecting from get307....')
  response.redirect(307, '/307redirected');
})

app.get('/307redirected', (request, response) => {
  console.log('get307 redirected')
  response.send('GET 307redirected')
})

app.post('/post301', function(req, res) {
  console.log('redirecting from post301....')
  res.redirect(301, '/301redirected');
});

app.post('/301redirected', (request, response) => {
  console.log('post301 redirected')
  response.send('POST 301redirected!')
})

app.post('/post307', function(req, res) {
  console.log('redirecting from post307....')
  res.redirect(307, '/307redirected');
});

app.post('/307redirected', (request, response) => {
  console.log('post307 redirected')
  response.send('POST 307redirected!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

