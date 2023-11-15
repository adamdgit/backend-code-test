const express = require("express");
const { Orders } = require("../../config");
const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const result = await Orders.get();
    const ordersList = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(ordersList);
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.post("/create", async (req, res) => {
  try {
    await Orders.add(req.body);
    res.status(201).send({ msg: "Orders added successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.put("/update/:order_id", async (req, res) => {
  try {
    req.body.map(async (x) => {
      await Orders.doc(x.id).update(x);
    });
    res.status(200).send({ msg: "Orders updated successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.delete("/delete/:order_id", async (req, res) => {
  try {
    const id = req.params.order_id;
    await Orders.doc(id).delete();
    res.status(200).send({ msg: "Order deleted successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

module.exports = routes;
