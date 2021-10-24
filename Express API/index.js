const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

app.use(express.json());

const cards = {
  items: [
    {}
  ],
  eligibileCards: () => {
    return ["a"]
  }
}

app.post('/eligibility', (req, res) => {

})


app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})