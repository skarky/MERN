const express = require ('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Radi aplikacija");
});

const port = 4000;
app.listen(port, ()=>{
    console.log("server is running on port 4000")
})