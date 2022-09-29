const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
const app = express();

app.use(express.json());
app.use(cors());
app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
resp.send(result);
})
 
app.listen(5000);
const port = process.env.port || 3001;
app.listen(port, () => {
  console.log("Sever console log.")
});
