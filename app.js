const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser');
var mongoose = require("mongoose");
const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/reto-register', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", function(e) { console.error(e); });


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var schema = mongoose.Schema({
  username: String,
  email: String,
  terms: Boolean
});

var User = mongoose.model('User', schema);

app.post('/registration', async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    terms: req.body.terms
  });
  let users = await User.find({});

  res.json(users);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
