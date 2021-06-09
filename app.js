const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

 
app.post('/login', (req, res) => {
  let accestype;
  if (req.body.userName === '1') {
    accestype = 'admin';
  } else if (req.body.userName === '2') {
    accestype = 'confluence';
  } else if (req.body.userName === '3') {
    accestype = 'jira';
  } else if (req.body.userName === '4') {
    accestype = 'payadvice';
  }
  else {
    accestype = 'readonly';
  }
  res.send({
    accestype: accestype
  });
});

app.listen(3030, () => console.log('API is running on http://localhost:3030/login'));