import express from "express"

const app = express();
app.use(express.static("public"));
app.listen(4080, console.log("http://localhost:4080"));

//app.listen([port[, host[, backlog]]][, callback])