const express = require('express');
const path = require('path');

const app = express();

app.use(
  '/public',
  express.static(path.resolve(__dirname, 'frontend', 'public'))
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server running on Port ${port}`));
