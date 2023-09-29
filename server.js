const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '172.104.241.199',
    port: '3306',
    user: 'u2_MuTvU8tUi1',
    password: '44=30T@jIMLMrDYwTe=gOF7d',
    database: 's2_SkoHubben'
});
connection.connect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const path = require("path")
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.post("/purchase", function (req, res) {
    connection.query(`SELECT * FROM wnr_orders`, function (err, result, fields) {
        let info = JSON.parse(JSON.stringify(result))

        var order_nr = info.length + 1

        let LaNi = req.body.LaNi
        let cola = req.body.cola
        let status = "production"

        connection.query(`INSERT INTO wnr_orders(order_nr, Lani, cola, status) VALUE(${connection.escape(order_nr)},${connection.escape(LaNi)}, ${connection.escape(cola)}, ${connection.escape(status)})`)
    })
})


app.get("/bought/items", function (req, res) {
    connection.query(`SELECT * FROM wnr_orders`, function (err, result, fields) {
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
})

app.post("/update/order", function (req, res) {
    connection.query(`SELECT * FROM wnr_orders`, function (err, result, fields) {
        let order_nr = req.body.order
        connection.query(`UPDATE wnr_orders SET status = "finished" WHERE order_nr = ${connection.escape(order_nr)}`)
    })
})






app.use(express.static("public"))
