const express = require("express")

const app = express();

//const db = require("./db/models")

const cors = require("cors");

const ingredientsRoutes = require("./routes/ingredientsRoutes")
const categoriesRoutes = require("./routes/categoriesRoutes")

// main M.W
app.use(express.json())
app.use(cors())


app.use("/categories", categoriesRoutes);
app.use("/ingredients", ingredientsRoutes);



//error M.W
app.use((err, req, res, next) => {
    res.status(err.status ?? 500).json({
      message: err.message ?? "Internal Server Error",
    });
  });


// not found M.W
  app.use((req, res, next) => {
    res.status(404).json({ message: "Path not found" });
  });



//db.sequelize.authenticate();


app.listen(8000);

