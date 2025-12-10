const express = require("express");
const proxy = require("express-http-proxy");
const app = express();

app.use("/auth", proxy("http://auth:3001"));
app.use("/inventory", proxy("http://inventory:3002"));

app.listen(8080, () => console.log("Gateway is listening from 8080"));