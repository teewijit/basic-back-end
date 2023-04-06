const express = require("express")
const path = require('path')
const router = require('./routes/myRouter')
//ใช้ตัวแปร app จัดการทุกอย่าง
const app = express();

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))

// app.use(router);

// กำหนดให้ server run in port 8080
app.listen(8080, () => {
  console.log("Server start in port 8080.");
});