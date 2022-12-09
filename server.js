const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const pokemon = require('./models/pokemon.js');

// Set up middleware
// Global configuration
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

// index 
// new 
// destroy 
// update 
// create 
// edit 
// show 

// Connection Error/Success
// Define callback functions for various events

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
      //id: [req.params.id]
    });
  });
});

app.post('/pokemon/', (req, res) =>{
    pokemon.create(req.body, (error, createdPokemon) => {
      res.redirect('/pokemon');
    });
  });
app.listen(port, () => {
  console.log("listening");
});

// db.on("error", (err) => console.log(err.message + " is mongod not running?"));
// db.on("open", () => console.log("mongo connected: ", mongoURI));
// db.on("close", () => console.log("mongo disconnected"));

// pokemon.create(pnew)
// // if database transaction succeeds
// .then((pokemon) => {
//   console.log(pokemon);
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error);
// })
// // close db connection either way
// .finally(() => {
//     db.close();
// });

// pokemon.insertMany(pokemon )
// // if database transaction succeeds
// .then((pokemon ) => {
//   console.log(pokemon );
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error);
// })
// // close db connection either way
// .finally(() => {
//   db.close();
// });

// pokemon.find({})
// // if database transaction succeeds
// .then((pokemons) => {
//   console.log(pokemons);
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error);
// })
// // close db connection either way
// .finally(() => {
//   db.close();
// });
