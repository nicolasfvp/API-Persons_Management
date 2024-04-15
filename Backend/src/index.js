const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const personRoutes = require("./routes/persons");
const addressRoutes = require("./routes/addresses");

const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200 
};

const app = express()
app.use(express.json(), cors(corsOptions))
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://nicolasfvp11:8CtuWALKEfO6dYnF@cluster0.ls1m2qn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));

app.use("/api/persons", personRoutes);
app.use("/api/persons", addressRoutes);

app.listen(PORT, () => {
    console.log("App running")
})