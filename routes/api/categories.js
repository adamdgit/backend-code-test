const express = require("express");
const { Categories, batch } = require("../../config");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const result = await Categories.get();
  const list = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

routes.post("/create", async (req, res) => {
  await Categories.add(req.body);
  res.send({ msg: "Category added successfully." });
});

routes.put("/update/:category_id", async (req, res) => {
  const id = req.params.category_id;
  delete req.body.id;
  await Categories.doc(id).update(req.body);
  res.send({ msg: "Category updated successfully." });
});

routes.delete("/delete/:category_id", async (req, res) => {
  const id = req.params.category_id;
  await Categories.doc(id).delete();
  res.send({ msg: "Category deleted successfully." });
});

module.exports = routes;
