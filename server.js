const express = require('express');
const fetch = require('isomorphic-fetch');

const app = express();
const port = process.env.PORT || 5000;

const t2estAPI = 'https://metpred.service.pharmb.io/v1/predictionHR?smiles=c1ccccc1'
const testAPI = 'https://jsonplaceholder.typicode.com/'

// Routes:
app.get('/api/:wish', (request, response) => {
  metpred(request.params.wish).then(data => response.send(data));
});


// Functions:
async function metpred(wish) {
  //const baseUrl = 'https://metpred.service.pharmb.io/v1/predictionHR?smiles=';
  console.log('Fetching from "' + testAPI + wish + '"')
  //const response = await fetch(baseUrl + smiles);
  const response = await fetch(testAPI + wish);
  if (response.status === 200) {
    console.log("Fetching " + wish + " successful!")
    const data = await response.json();
    return data;
  }
  else {
    console.log("FAILED")
    return 'Error!'}
}

  /*
  fetch(testAPI)
    .then(function(result) {
      return result.text();
    })
    .then(function(data) {
      response.send('hello world');
    })
  */

app.listen(port, () => console.log(`Listening on port ${port}`));
