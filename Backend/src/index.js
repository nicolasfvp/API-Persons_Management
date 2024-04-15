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

mongoose.connect("mongodb://admin:password@localhost:27017/admin")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));

app.use("/api/persons", personRoutes);
app.use("/api/persons", addressRoutes);

app.listen(PORT, () => {
    console.log("App running")
})