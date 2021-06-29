const express = require('express');
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(express.json());

const db = require("./database");
db.sequelize.sync();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","x-access-token, Origin, Content-Type, Accept", "*");
    next();
});

const words = require("./src/controllers/Words.controller");

app.get('/getWords/', words.getAllUniqueWords);
app.post('/addWord/', words.createWord);
app.post('/countWords/', words.countWord);
app.delete('/deleteWord/:name',words.deleteWord);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});