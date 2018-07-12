const express = require('express');
const fetch = require('isomorphic-fetch');

const app = express();
const port = process.env.PORT || 5000;

// Routes:
app.get('/:model/:predictionType', (request, response) => {
  let model = request.params.model;
  let predictionType = request.params.predictionType;
  let smiles = request.query.smiles;

  let url = "https://" + model + ".service.pharmb.io/v1/" + predictionType + "?smiles=" + smiles;

  console.log("Attempting fetch from " + url);

  loadData(url).then(data => response.send(data));
});


// Functions:
const loadData = async (url) => {
  const response = await fetch(url);

  switch (response.status) {
    case 200:
      console.log("---- Fetch successful! ----");
      break;
    case 400:
      console.log(">>>> SMILES not possible to parse <<<<");
      break;
    case 500:
      console.log(">>>> Server error <<<<");
      break;
    default:
      console.log("Something went wrong...");
  }

  let type = response.headers.get("content-type");

  if (type === "application/json") {
    console.log("Response type is json")
    return response.json();
  } else {
    console.log("Response is not json (plain text or image)");
    return response.text();
  }
}

app.listen(port, () => console.log(`Listening on port ${port}`));
