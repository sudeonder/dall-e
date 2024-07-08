import express from "express";
import * as dotenv from "dotenv";

import { generateImg } from "../controllers/dalleController.js";

dotenv.config();

const router = express.Router();

router.post("/generate-img", generateImg);

export default router;
