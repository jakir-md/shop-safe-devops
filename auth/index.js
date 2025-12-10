const express = require("express");
const app = express();
app.use(express.json());

// Simulating a "Secret" check (DevSecOps)
// In a real app, this comes from process.env.JWT_SECRET
app.post("/login", (req, res) => {
  const { user } = req.body;
  if (user === "admin") {
    return res.json({ token: "secure-token-123", status: "Authorized" });
  }
  res.status(401).json({ error: "Unauthorized" });
});

app.listen(3001, () => console.log("Auth running on 3001"));
