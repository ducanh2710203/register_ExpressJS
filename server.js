const express = require('express');
const app = express();
const port = 3029
app.set("views","./views")
app.set("view engine","ejs")
app.use(express.static("public"))
let products= [
    {
        tile : "iphone",
        src : "img/ip14.jpg"
    },
    {
        tile : "ipad Pro",
        src : "img/ipadPro.jpg"
    },
    {
        tile : "z fold",
        src : "img/zfold.jpg"
    }
]
app.get('/', ((req, res) => {
    res.render('home', {data: products})
}))
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})