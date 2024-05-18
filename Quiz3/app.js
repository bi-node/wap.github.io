const express = require("express");
const bookRoutes = require("./routes/bookRouter")

const app = express();

app.use(express.json())

app.use("/books", bookRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        success: "failed",
        message: "Woops! 404 not found"
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        success: "failed",
        message: "Server Error"
    })
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})