import mongoose from "mongoose";

const Menuschema = new mongoose.Schema({
  menus: [
    {
      name: { type: String, required: true },
      items: [
        { type: mongoose.Types.ObjectId, ref: "Foods" }],
    },
  ],
  recommended: [{ type: mongoose.Types.ObjectId, ref: "Foods", unique: true }],
});

export const MenuModel = mongoose.model("Menu", Menuschema);
