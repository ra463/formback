import express from "express";
import {
  createform,
  createformimg,
  getFormData,
} from "../controllers/createform.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/create").post(createform);

router.route("/createimg").post(upload, createformimg);

router.route("/getdata").get(getFormData);

export default router;
