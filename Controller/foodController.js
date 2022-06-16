const FoodModel = require("../models/foodModel");

// add item to order
const addFood = async (req, res) => {
    const foodModel = new FoodModel(req.body);
    foodModel
        .save()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// get all ordered Item
const getAllFoods = async (req, res) => {
    FoodModel.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// get food by Id
const getFoodById = async (req, res) => {
    FoodModel.findById(req.body.id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
// update food by id
const updateFoodById = async (req, res) => {
    FoodModel.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
// get foods by catergory
const getFoodByCategory = async (req, res) => {
    FoodModel.find({ category: req.body.category })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// delete food by id
const deleteFoodById = async (req, res) => {
    FoodModel.findByIdAndRemove(req.body.id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

module.exports = {
    addFood,
    getAllFoods,
    getFoodById,
    deleteFoodById,
    updateFoodById,
    getFoodByCategory
};