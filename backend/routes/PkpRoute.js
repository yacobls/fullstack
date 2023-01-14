import express from "express";
import {
    getPkp,
    getPkpById,
    createPkp
} from "../controllers/PkpController.js";

const router = express.Router();

router.get('/pkp', getPkp);
router.get('/pkp/:id', getPkpById);
router.post('/pkp', createPkp);

export default router;