
state = {
  stats: "No changes"
};

getSmiles() {
  let data = document.JME.smiles();
  document.getElementById("output").value = data;
}

getJMEstring() {
  let data = document.JME.jmeFile();
  document.getElementById("output").value = data;
}

async getPredictionStatistics() {
  const response = await fetch('/api/metpred');
  const body = await response.text();
  return body;
}

componentDidMount() {
  this.getPredictionStatistics().then( res => this.setState({ stats: res }))
}



//////////////////////////

// Function Declaration
function square(x) {
  return x * x;
}
// Function Expression
const square = function(x) {
  return x * x;
}
// Arrow Function Expression
const square = (x) => {
  return x * x;
}
// Conside Arrow Function Expression
const square = x => x * x;
