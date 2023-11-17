const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const sql = require('./db')



app.get("/", (req, res)=> {
    res.status(200).json("here we go")
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
