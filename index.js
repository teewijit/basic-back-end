const express = require("express")
const router = require('./routes/myRouter')
const path = require('path')
//ใช้ตัวแปร app จัดการทุกอย่าง
const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.use(router);

// กำหนดให้ server run in port 8080
app.listen(8080, () => {
  console.log("Server start in port 8080.");
});
