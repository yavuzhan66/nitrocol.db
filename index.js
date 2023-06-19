const { query } = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

const mysql = require('mysql');
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "",
    database: "nitrocol.db",
});

app.use(express.static("public"));

app.set('view engine', "ejs");
app.set('views' , "./views");
app.listen(8080, () => {
    console.log("le serveur redirige sur la page http://127.0.0.1.8080")
});

app.use(express.json());

const Users = require('./api/users')
let users = new Users()
console.log(users);

const Products = require('./api/products')
let products = new Products()
console.log(products);

const Categories = require('./api/categories')
let categories = new Categories()
console.log(categories);

connect.connect(function(err){
    if (err) throw err;
    console.log("la connexion fonctionne correctement");
    connect.query("SELECT * FROM Users;" , function(err, result){
        if (err) throw err;
        console.log(result);
    })
});


connect.connect(function(err){
    if (err) throw err;
    console.log("la connexion fonctionne correctement");
    connect.query("SELECT * FROM Products;" , function(err, result){
        if (err) throw err;
        console.log(result);
    })
});


connect.connect(function(err){
    if (err) throw err;
    console.log("la connexion fonctionne correctement");
    connect.query("SELECT * FROM Categories;" , function(err, result){
        if (err) throw err;
        console.log(result);
    })
});



app.get("/users", function (request, response) {
    connect.query("SELECT * FROM users;", function (err, result) {
        if (err) throw err;
        console.log(result);
        response.render("users", {users: result})
         
    })
});


app.get("/products", function (request, response) {
    connect.query("SELECT * FROM users;", function (err, result) {
        if (err) throw err;
        console.log(result);
        response.render("products", {users: result})
         
    })
});



app.get("/categories", function (request, response) {
    connect.query("SELECT * FROM users;", function (err, result) {
        if (err) throw err;
        console.log(result);
        response.render("categories", {users: result})
         
    })
});



