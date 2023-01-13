import express from "express";
import {getPkp} from "../controllers/PkpController.js";

const router = express.Router();

router.get('/pkp', getPkp);

export default router;