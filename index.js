const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// express server setup, cors
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// import routes from routes folder
const auth_routes = require("./routes/api/auth");
const user_routes = require("./routes/api/users");
const order_routes = require("./routes/api/orders");
const menu_routes = require("./routes/api/menu");
const categories_routes = require("./routes/api/categories");

// define routes
app.use("/api/auth", auth_routes);
app.use("/api/users", user_routes);
app.use("/api/orders", order_routes);
app.use("/api/menu", menu_routes);
app.use("/api/categories", categories_routes);
app.use("/static", express.static("static"));

/**
 * Start the server and listen for incoming requests.
 * @param {number} [process.env.PORT] - The port number specified in the environment variable or the default PORT.
 * @param {number} PORT - The default port number.
 * @callback console.log - Outputs a message indicating that the server is listening on a specific port.
 */
app.listen(process.env.PORT || PORT, () => console.log("listening on port: " + PORT));
