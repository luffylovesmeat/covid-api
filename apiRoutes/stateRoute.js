import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const results = await fetch(process.env.DB_HOST);
    const { data: { regional } } = await results.json();
    res.send(regional);
  } catch (err) {
    res.send({ Error: err });
  }
});

export default router;
