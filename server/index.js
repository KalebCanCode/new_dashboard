// server/index.js

const express = require('express');
const bodyParser = require('body-parser');

let text = 'Initial text';

const app = express();
app.use(bodyParser.json());

app.post('/changeText', (req, res) => {
  const newText = req.body.newText;
  // Update the text as per your logic
  // ...
  text = newText

  // Send a response indicating success or failure
  res.json({ success: true });
});

app.get('/getText', (req, res) => {
    res.json({ text });
  });

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});