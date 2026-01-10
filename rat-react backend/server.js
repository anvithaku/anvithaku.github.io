const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Ratsaurant backend!", specials: ["Cheese Trap Pasta", "Rodent Risotto"] });
});


app.post("/api/data", (req, res) => {
    console.log("Received form data:", req.body);
    res.json({ status: "success", received: req.body });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});