import express from "express";
import {
    getPkp,
    getPkpById
} from "../controllers/PkpController.js";

const router = express.Router();

router.get('/pkp', getPkp);
router.get('/pkp/:id', getPkpById);

export default router;