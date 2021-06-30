const express = require("express"); 
const router = express.Router();

// const {
//     categoryList,
//     categoryCreate,
//     ingredientsCreate
//   } = require("../controllers/categoryControllers");

const categoryControllers = require("../controllers/categoryControllers")
  

  
  router.get("/", categoryControllers.categoryList);

  router.post("/:categoryId/ingredients", categoryControllers.ingredientsCreate);
  router.post("/", categoryControllers.categoryCreate);
  

  module.exports = router;