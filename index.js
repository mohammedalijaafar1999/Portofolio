const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/works', (req, res) => {
  res.render('works');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/blog', (req, res) => {
  res.render('blog');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})