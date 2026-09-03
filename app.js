const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html"});
    response.end("<h1>Dicker AWS Learning - version 3 </h1>");
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Application running on port 3000");
})