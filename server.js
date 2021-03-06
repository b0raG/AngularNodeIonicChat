var app = require('./app/app.js');
var server = app.listen(3000);

//socket.io instantiation
const io = require("socket.io")(server)

io.on('connection',(socket) => {
  console.log('New user connected');

  socket.username = "Anonumous"

  socket.on('change_username', (data) =>{
      socket.username = data.username;
  });

  socket.on('new_message', (data) =>{
    io.sockets.emit('new_message',{message : data.message, username : socket.username})
});

});
