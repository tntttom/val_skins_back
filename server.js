const express = require("express");
const cors = require("cors");

const app = express();

//Database
require("./server/config/mongoose.config");

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Routes
require("./server/routes/skin.routes")(app);
require("./server/routes/collections.routes")(app);

//Listening port
app.listen(8000, () => {
  console.log("Listening at port 8000");
});
