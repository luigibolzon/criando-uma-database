
const express = require("express");
const todosRoutes = require("./todos.routes.js"); 
const app = express();

app.use(express.json());
app.use(todosRoutes); 

app.get("/rota", (req,res) => {
return res.json("up");
});

app.listen(3333, () => console.log("Server up no 3333"));   
