const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const menu_routes = require("./routes/api/menu");
const categories_routes = require("./routes/api/categories");

app.use("/api/menu", menu_routes);
app.use("/api/categories", categories_routes);
app.use("/static", express.static("images"));

app.listen(PORT, () => console.log("listening on port: " + PORT));
