"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Menuschema = new _mongoose["default"].Schema({
  menus: [{
    name: {
      type: String,
      required: true
    },
    items: [{
      type: _mongoose["default"].Types.ObjectId,
      ref: "Foods"
    }]
  }],
  recommended: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: "Foods",
    unique: true
  }]
});

var MenuModel = _mongoose["default"].model("Menu", Menuschema);

exports.MenuModel = MenuModel;