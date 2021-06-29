const express = require("express")

const app = express();

const db = require("./db/models")
// main M.W
app.use(express.json())



db.sequelize.authenticate();


app.listen(8000);

