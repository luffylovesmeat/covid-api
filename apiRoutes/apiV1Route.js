import express from "express";
import fetch from "node-fetch";
import stateRoute from "./stateRoute.js";

const router = express.Router();

router.use("/state", stateRoute);

router.get("/latest", async (req, res) => {
  try {
    const results = await fetch(process.env.DB_HOST);
    const { data: { summary } } = await results.json();
    res.send(summary);
  } catch (err) {
    res.send({ Error: err });
  }
});

export default router;
