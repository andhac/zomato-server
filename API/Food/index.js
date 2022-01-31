//Libraries
import express from "express";

//Database model
import { FoodModel } from "../../database/allModels";

//Validation
import { validateCategory, validateId } from "../../validation/common";

const Router = express.Router();

/**
 * Route        /:_id
 * Des          GET food based on id
 * Params       _id
 * Access       Public
 * Method       GET
 */
 Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.findById(_id);
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route       /r/:_id
 * Des         GET all based on particular resturant
 * Params      none
 * Access      Public
 * Method      GET
 */
Router.get("/r/:_id", async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route       /c/:category
 * Des         GET all based on particular category
 * Params      none
 * Access      Public
 * Method      GET
 */

Router.get("/c/:category", async (req, res) => {
  try {
     validateCategory(req.params);
    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });
    if (!foods)
      return res
        .status(400)
        .json({ error: `NO Food matched with ${category}` });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
