"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRestaurantSearchString = exports.validateRestaurantCity = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateRestaurantCity = function validateRestaurantCity(restaurantObject) {
  var Schema = _joi["default"].object({
    city: _joi["default"].string().required()
  });

  return Schema.validateAsync(restaurantObject);
};

exports.validateRestaurantCity = validateRestaurantCity;

var validateRestaurantSearchString = function validateRestaurantSearchString(restaurantObject) {
  var Schema = _joi["default"].object({
    searchString: _joi["default"].string().required()
  });

  return Schema.validateAsync(restaurantObject);
};

exports.validateRestaurantSearchString = validateRestaurantSearchString;