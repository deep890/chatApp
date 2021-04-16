const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = 5600

app.get('/', (req,res) =>{ 
    res.sendFile(__dirname + '/index.html')
    
})

io.on('connection' , function(socket){
    socket.io('chat message', msg =>{
        io.emit('chat message', msg)
    })

})

app.listen(PORT); 
