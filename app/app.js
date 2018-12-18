const express = require('express');
port = process.env.PORT || 3000;
const app = module.exports = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  //  res.send('Hello World malakes!')
  res.render('homeChat')
});
app.get('/chat', (req, res) => {
    res.render('homeChat')
});
//app.listen(port, () => console.log('todo list RESTful API server started on: ' + port));
