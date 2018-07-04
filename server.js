const express = require('express');
const fetch = require('isomorphic-fetch');

const app = express();
const port = process.env.PORT || 5000;

const testAPI = 'https://jsonplaceholder.typicode.com/'

// Routes:
app.get('/api/:method', (request, response) => {
  let method = request.params.method;
  metpred(method).then(data => response.send(data));
});



// Functions:
async function metpred(method) {
  console.log('Fetching from "' + testAPI + method + '"')
  const response = await fetch(testAPI + method);
  if (response.status === 200) {
    console.log("Fetching " + method + " successful!")
    const data = await response.json();
    return data;
  }
  else {
    console.log("FAILED")
    return 'Error!'}
}

app.listen(port, () => console.log(`Listening on port ${port}`));
