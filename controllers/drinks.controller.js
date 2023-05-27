const Drink = require("../models/Drink.model")
module.exports.drinksController = {
    createDrink: async (req, res) => {
   const data = await Drink.create({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    caffeine: req.body.caffeine,
    volume: req.body.volume,
    description: req.body.description,
   
   });
   res.json(data)
    },
    getInStockDrinks: async (req, res)=> {
        try {
            const data = await Drink.find({stock: {$gt: 0}});
            res.json(data)
        }catch {
            res.json("не удалось сделать запрос на напитки в наличии ")
        }
    },

    getDrinks: async (req, res)=>{  //вывод всех напитков
    const data = await Drink.find({}, {name: 1, price: 1});
    res.json(data)
    },
    urlDrinks: async (req, res)=> { //вывод напитка по id, с подробной инфой
        try {
        const data = await Drink.findById(req.params.id);
        res.json(data)}catch{
            res.json("неудалось сделать запрос на напиток")
        } 
    },
    deleteDrinks: async (req, res)=> {
        try {
            const data = await Drink.findByIdAndDelete(req.params.id);
        res.json("напиток удален")
        }catch {
            res.json("неудалось удалить напиток")
        }
    
    },
    updateDrinks: async(req, res)=> {
        try{
            const data = await Drink.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                caffeine: req.body.caffeine,
                volume: req.body.volume,
                description: req.body.description 
            });
            
            res.json(data)
        }catch{
            res.json("не удалось осуществить запрос на обновление напитка")
        }
    }
    
}
