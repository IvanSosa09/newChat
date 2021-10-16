//SERVIDOR
const express = require("express")
const http = require("http")
const {Server} = require("socket.io");

const ruta = require("./routes/index");

// applicacion
const app = express()

// middlewares post body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//archivo staticos
app.use(express.static(__dirname + "/public"))

// //CONFIG EJS
app.set("views", __dirname + "/views");
app.set("view engine","ejs");

// socket conneccion
const mensajes = [];
const server = http.createServer(app)
const io = new Server(server);

io.on("connection",(socket)=>{
    console.log("usuario conectado!")
    socket.on("informacion",(data)=>{
        mensajes.push(data)
        // console.log(data)
    })

    io.sockets.emit("send-info",mensajes);
})
    

// montar rutas
app.use("/", ruta)

// servidor
const port = process.env.PORT || 3005; 

server.listen(port,()=>{
    console.log(`server is run on port ${port}`)
})

