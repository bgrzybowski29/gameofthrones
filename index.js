const express = require('express');
const { Character } = require('./models');
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())

app.get('/characters', async (req, res) => {
  const characters = await Character.findAll()
  res.json(characters)
})
app.get('/characters/:id', async (req, res) => {
  const id = req.params.id
  const character = await Character.findByPk(id)
  res.json(character)
})
app.put('/characters', async (req, res) => {
  console.log(req);
})
app.post('/characters/:id', async (req, res) => {
  console.log(req);
})
app.delete('/characters/:id', async (req, res) => {
  console.log(req);
})
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});