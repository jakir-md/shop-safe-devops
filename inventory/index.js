const express = require("express");
const app = express();

const products = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Phone", stock: 10 },
];

app.get("/products", (req, res) => {
  res.json({ service: "inventory", data: products });
});

app.listen(3002, () => console.log("Inventory running on 3002"));
