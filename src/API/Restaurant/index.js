//Libraries
import express from "express";

//Database model
import { RestaurantModel } from "../../database/allModels";

//Validation
import { validateRestaurantCity,validateRestaurantSearchString } from "../../validation/restaurant";
import { validateId } from "../../validation/common";
const Router = express.Router();
/**
 * Route       /
 * Des         GET all the restaurant details based on specific cities
 * Params      none
 * Access      Public
 * Method      GET
 */
Router.get("/", async (req, res) => {
  try {
    // http://localhost:4000/restaurant/?city=NCR
    await validateRestaurantCity (req.query);
    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0) {
      return res.json({ error: "OOPS !!! No restaurants found in this city" });
    }
    return res.json(restaurants);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/**
 * Route       /
 * Des         Get individual detail restaurant details based on id
 * Params      none
 * Access      Public
 * Method      GET
 */
// http:localhost:4000/restaurants/435fdtfgfwwf555
Router.get("/:_id", async (req, res) => {
  try {
    await validateId (req.params);
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);

    if (!restaurant)
      return res.status(400).json({ error: "Restaurant Not Found" });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route       /
 * Des        Get restaurant details based on search string
 * Params      none
 * Access      Public
 * Method      GET
 */

Router.get("/search/:searchString", async (req, res) => {
  try {
    await validateRestaurantSearchString (req.params);
    const { searchString } = req.params;

    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (!restaurants)
      return res
        .status(400)
        .json({ error: `NO restaurant matched with ${searchString}` });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
