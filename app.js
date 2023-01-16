const express = require('express');
const api = require('./api');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Horror movie app is running on port ${port}.`)
});

app.get('/horrors/', api.getAllHorrors);
app.get('/horrors/:id', api.getHorrorById);
app.post('/horrors/', api.addHorror);
app.put('/horrors/:id', api.updateHorror);
app.delete('/horrors/:id', api.deleteHorror);