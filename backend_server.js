import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Tracking endpoint
app.get("/api/track/:id", (req, res) => {
  res.json({
    status: "In Transit",
    lastUpdated: new Date(),
    history: [
      { time: new Date(), location: "Shanghai Port", note: "Loaded on vessel" },
      { time: new Date(), location: "Singapore Port", note: "In transit" }
    ]
  });
});

// Quote endpoint
app.post("/api/quote", (req, res) => {
  const { weight, volume } = req.body;
  const price = weight * 2 + volume * 100;
  res.json({ estimatedPrice: price, etaDays: 5, currency: "USD" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend running on ${port}`));