const express = require("express");

const { Router } = express;
const router = new Router;

const productos = []; 

// router.get("/",(req,res)=>{
//   res.render("index",{data:productos})
// })

// router.post("/", async (req,res)=>{
//   try{
//       let {nombre,precio,imagen} = req.body;
//       let obj = {
//           nombre,
//           precio,
//           imagen
//       }
//       productos.push(obj)
//       res.redirect("/")
//       }catch{
//       res.send("<h4>error del servidor</h4>").status(500);
//   }
// })


router.route('/').get((req,res)=>{
  res.render("index",{data:productos})
}).post(async (req,res)=>{
  try{
      let {nombre,precio,imagen} = req.body;
      let obj = {
          nombre,
          precio,
          imagen
      }
      productos.push(obj)
      res.redirect("/")
      }catch{
      res.send("<h4>error del servidor</h4>").status(500);
  }
})

module.exports = router;