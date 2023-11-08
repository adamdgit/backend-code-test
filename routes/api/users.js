const express = require("express");
const { Users } = require("../../config");
const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const result = await Users.get();
    const ordersList = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(ordersList);
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.post("/create", async (req, res) => {
  try {
    await Users.add(req.body);
    res.status(201).send({ msg: "User created successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.put("/update/:user_id", async (req, res) => {
  try {
    const id = req.params.user_id;
    await Users.doc(id).update(req.body);
    res.status(200).send({ msg: "User details updated successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

routes.delete("/delete/:user_id", async (req, res) => {
  try {
    const id = req.params.user_id;
    await Users.doc(id).delete();
    res.status(200).send({ msg: "User deleted successfully." });
  } 
  catch (err) {
    res.status(400).send(err)
  }
});

module.exports = routes;
