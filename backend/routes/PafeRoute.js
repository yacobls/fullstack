import express from "express";
import {
    getPafe,
    getPafeById,
    createPafe,
    updatePafe,
    deletePafe

} from "../controllers/PafeController.js";

const router = express.Router();

router.get('/pafe', getPafe);
router.get('/pafe/:id', getPafeById);
router.post('/pafe', createPafe);
router.patch('/pafe/:id', updatePafe);
router.delete('/pafe/:id', deletePafe);


export default router;