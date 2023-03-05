const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());

let data = [
  { name: "Sachin Patidar", roll: 1 },
  { name: "Vishal Patidar", roll: 2 },
  { name: "Aman Patidar", roll: 3 },
  { name: "Mohit Chauhan", roll: 4 },
  { name: "Deepak Solanki", roll: 5 },
  { name: "JD", roll: 6 },
];

app.get("/api/chat", (req, res) => {
  return res.send(data);
});

app.listen(PORT, console.log(`server started on port ${PORT}`));
