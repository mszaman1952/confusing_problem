


const userRouter = require("./routes/users.routes");

const express = require('express');

const app = express();
const port = 3000;
const hostName = '127.0.0.1';

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(userRouter)


app.use((req, res) => {
    res.status(404).json({
        message : "Resource Not Found"
    })
})

app.listen(port, hostName, () => {
    console.log(`Server is Running Successfully at http://${hostName}:${port}`);
});



