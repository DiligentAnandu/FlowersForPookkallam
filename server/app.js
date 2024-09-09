const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const flowers = require('./flowers.json');

app.get('/api/flowers/:color', (req, res) => {
  const color = req.params.color.toLowerCase();
  const filteredFlowers = flowers.filter(flower => 
    flower.colors.some(c => c.toLowerCase() === color)
  );
  res.json(filteredFlowers);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
