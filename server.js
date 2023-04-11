const { PeerServer } = require("peer");
let PORT = process.env.PORT||5009; 
console.log(`service is running in ${PORT}`)
const peerServer = PeerServer({ port: PORT, path: "/myapp" });