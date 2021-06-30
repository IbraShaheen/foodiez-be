const {
    ingredientList,

  } = require("../controllers/ingredientControllers");
  
  const express = require("express");
  const router = express.Router();



  router.get("/", ingredientList);
 

  module.exports = router;