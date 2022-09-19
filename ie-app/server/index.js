const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const corsOptions = {
  origin: "https://vicish.ml",
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'OPTIONS', 'DELETE'],
  headers: [
    'Content-Type',
    'Authorization',
    'application/json',
    'text/plain',
    '*/*',
    'Origin',
    'X-Requested-With',
    'Accept'
  ],
  credentials: true
}

app.use(cors(corsOptions))
app.use(express.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", 'https://vicish.ml');
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//   next();
// })

const db = mysql.createConnection({
  user: "bb019ed7eab21c",
  host: "us-cdbr-east-06.cleardb.net",
  password: "a7fb25f2",
  database: "heroku_00077ded25ddaeb",
});


app.get("/landmark", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  db.query(`
  SELECT *, ( 3959 * acos( cos( radians(Latitude) ) * cos( radians(?) ) * cos( radians(?) - radians(Longitude) ) + sin( radians(Latitude) ) * sin( radians(?)))) AS distance 
  FROM landmark
  ORDER BY distance 
  LIMIT 0 , 10;
  `, [lat, lon, lat], (err, result) => {
    if (err) {
      throw new Error('Something went wrong!' + err);
    } else {
      res.send(result);
    }
  });
});

app.get("/artwork", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  db.query(`
  SELECT *, ( 3959 * acos( cos( radians(lat) ) * cos( radians(?) ) * cos( radians(?) - radians(lon) ) + sin( radians(lat) ) * sin( radians(?)))) AS distance 
  FROM artwork
  ORDER BY distance 
  LIMIT 0 , 10;
  `, [lat, lon, lat], (err, result) => {
    if (err) {
      throw new Error('Something went wrong!' + err);
    } else {
      res.send(result);
    }
  });
});

app.get("/music", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  db.query(`
  SELECT *, ( 3959 * acos( cos( radians(lat) ) * cos( radians(?) ) * cos( radians(?) - radians(lon) ) + sin( radians(lat) ) * sin( radians(?)))) AS distance 
  FROM music
  ORDER BY distance 
  LIMIT 0 , 10;
  `, [lat, lon, lat], (err, result) => {
    if (err) {
      throw new Error('Something went wrong!' + err);
    } else {
      res.send(result);
    }
  });
});

app.get("/englishquiz", (req, res) => {
  db.query(`SELECT ans FROM englishquiz;`, (err, result) => {
    if (err) {
      throw new Error('Something went wrong!' + err);
    } else {
      res.send(result);
    }
  });
});

app.get("/slangquiz", (req, res) => {
  db.query(`SELECT * FROM quiz;`, (err, result) => {
    if (err) {
      throw new Error('Something went wrong!' + err);
    } else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log("Yey, your server is running");
});