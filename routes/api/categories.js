const express = require("express");
const { Categories } = require("../../config");
const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const data = await Categories.get();
    const list = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(list);
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.post("/create", async (req, res) => {
  try {
    console.log(req.body)
    await Categories.add(req.body);
    res.status(201).send({ msg: "Category added successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.put("/update/:category_id", async (req, res) => {
  try {
    const id = req.params.category_id;
    await Categories.doc(id).update(req.body);
    res.status(200).send({ msg: "Category updated successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.delete("/delete/:category_id", async (req, res) => {
  try {
    const id = req.params.category_id;
    await Categories.doc(id).delete();
    res.status(200).send({ msg: "Category deleted successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

module.exports = routes;
