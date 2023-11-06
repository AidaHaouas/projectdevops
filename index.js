const express = require('express');
const {default: mongoose} = require("mongoose");
const authRouter = require('./features/Auth/Routes');
const cors = require('cors');

const app = express();
app.use(
    cors(
        {
            origin: "*"
        }
    )
)
app.use(express.json())
const Port =4001;

app.get('/', (req,res) =>{
    res.send("hello from to do app");
}  );

app.use('/', authRouter);



app.listen(Port, async() =>{
    console.log(`Listening on ${Port} for requests`);
    await mongoose.connect("mongodb://127.0.0.1:27017/todo");
    console.log("connected yo Db");
}  );
