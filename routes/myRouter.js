// จัดการ routing
const express = require("express")
const router = express.Router();

router.get('/',(req,res) => {
    const products = [
        {
            name: "โน้ตบุค",
            price: 50000,
            image: "images/products/product1.png"
        },
        {
            name: "เสื้อผ้า",
            price: 2000,
            image: "images/products/product2.png"
        },
        {
            name: "หูฟัง",
            price: 5000,
            image: "images/products/product3.png"
        }
    ]
    res.render('index',{products:products})
})

router.get('/addform',(req,res) => {
    res.render('form')
})

router.get('/manage',(req,res) => {
    res.render('manage')
})

router.post('/insert',(req,res) => {
    console.log(req.body);
    res.render('form')
})
// อ้างอิงตำแหน่งไฟล์
// __dirname คือตำแหน่ง Project ปัจจุบัน
// const indexPage = path.join(__dirname,"templates/index.html")

// app.use ต้องเขียนก่อน app.listen
// router.get("/",(req, res) => {
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname,"../templates/index.html"))
// })

// router.get("/product/:id",(req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/product1.html"))
//     const productId = req.params.id
//     if(productId === "1"){
//         res.sendFile(path.join(__dirname,"../templates/product1.html"))
//     }else if(productId === "2"){
//         res.sendFile(path.join(__dirname,"../templates/product2.html"))
//     }else if(productId === "3"){
//         res.sendFile(path.join(__dirname,"../templates/product3.html"))
//     }else{
//         res.redirect('/')
//     }
// })

module.exports = router