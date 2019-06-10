const server = require("./server.js"); //import

//setting up server with dynamic ports for listening
const port = 5000;

server.listen(port, function() {
  console.log(`*** Server listening on port ${port}. ***`);
});