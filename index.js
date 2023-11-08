const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const auth_routes = require("./routes/api/auth");
const user_routes = require("./routes/api/users");
const order_routes = require("./routes/api/orders");
const menu_routes = require("./routes/api/menu");
const categories_routes = require("./routes/api/categories");

app.use("/api/auth", auth_routes);
app.use("/api/users", user_routes);
app.use("/api/orders", order_routes);
app.use("/api/menu", menu_routes);
app.use("/api/categories", categories_routes);
app.use("/static", express.static("static"));

app.listen(process.env.PORT || PORT, () => console.log("listening on port: " + PORT));
