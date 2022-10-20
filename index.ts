require('dotenv').config();
const http = require('http');
const app = require("./src/app").app;
// const encode = require('encode-html');
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// let str = ``
// console.log(JSON.stringify(encode(str)))
const server = http.createServer(app);
app.listen(PORT, () => {
    console.log(`Start in ${PORT}`);
});
