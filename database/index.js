const server = require("./src/server.js")
const PORT = 8004
server.listen(PORT, () => console.log(`DATABASE on PORT ${PORT}`))