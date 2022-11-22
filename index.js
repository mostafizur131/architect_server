const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi From architect server");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
