import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});

const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

import createformroute from "./routes/createformroute.js";

app.use("/api/v1", createformroute);

export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Its working. Click to visit <a href=${process.env.FRONTEND_URL}>Link</a></h1>`
  )
);