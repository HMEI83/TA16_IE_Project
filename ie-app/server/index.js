const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678.",
  database: "landmark_db",
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
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/englishquiz", (req, res) => {
  db.query(`SELECT ans FROM englishquiz;`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});