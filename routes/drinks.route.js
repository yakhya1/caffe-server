const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controller")
const router = Router(); 

router.post("/drinks", drinksController.createDrink)
router.get("/drinks/in-stock", drinksController.getInStockDrinks)
router.get("/drinks", drinksController.getDrinks)
router.get("/drinks/:id", drinksController.urlDrinks)
router.delete("/drinks/:id", drinksController.deleteDrinks)
router.patch("/drinks/:id", drinksController.updateDrinks)


module.exports = router 