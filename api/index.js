const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello vercel");
});

app.get("/getjson", (req, res) => {
  res.json({
    Name: "Vercel test",
    type: "express",
  });
});

app.listen(5000, () => {
  console.log("App is listening");
});
