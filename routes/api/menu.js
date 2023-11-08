const express = require("express");
const { Menu, batch } = require("../../config");
const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const data = await Menu.get();
    const menuItems = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(menuItems);
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.post("/create", async (req, res) => {
  try {
    await Menu.add(req.body);
    res.status(201).send({ msg: "Menu item added successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.put("/update/:menu_id", async (req, res) => {
  try {
    const id = req.params.menu_id;
    await Menu.doc(id).update(req.body);
    res.status(200).send({ msg: "Menu item updated successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.delete("/delete/:menu_id", async (req, res) => {
  try {
    const id = req.params.menu_id;
    await Menu.doc(id).delete();
    res.status(200).send({ msg: "Menu item deleted successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

module.exports = routes;
