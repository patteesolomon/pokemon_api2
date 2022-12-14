const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const pokemon = require('./models/pokemon.js');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.engine("jsx", require("express-react-views").createEngine());
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemons : allPokemon
    });
  });// 
});

app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

app.get('/pokemon/:id', (req, res) => {
  pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render('Show', {
      pokemons : foundPokemon
    });
  });
});

app.get('/pokemon/:id/edit', (req, res) => {
  pokemon.findById(req.params.id, (err, foundPokemon)=>{
    if(!err){
      res.render(
        'Edit',
        {
          pokemon: foundPokemon
        }
      );
    }
    else{
      res.send({ msg: err.message });
    }
  });
});

app.post('/pokemon', (req, res) =>{
    pokemon.create(req.body, (error, createdPokemon) => {
      res.redirect('/pokemon');
    });
  });

app.listen(port, () => {
  console.log("listening");
});
