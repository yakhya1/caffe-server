const express = require("express");
const mongoose = require("mongoose");
const port = 3030;

const app = express();

app.use(express.json());
app.use(require("./routes/drinks.route"))

mongoose
  .connect(
    "mongodb+srv://gaitukaev777:IAKHia22@cluster0.xprg9jb.mongodb.net/yakhya?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, ()=> {
    console.log(`started `)
})