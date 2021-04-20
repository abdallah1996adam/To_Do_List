const express = require("express");
const app = express();
const ejs = require("ejs");
const router = require("./routers");
const bodyParser = require('body-parser')

app.engine("ejs", ejs.renderFile);
app.set("views", "./src/views");
app.use(express.static("./src/assets")); 
app.use(bodyParser.urlencoded({extended: true}))

app.use(router);
app.listen(4444, () => {
  console.log("Server in up and running on port 4444");
});
