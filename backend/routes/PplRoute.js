import express from "express";
import {
    getPpl,
    getPplById,
    createPpl,
    updatePpl,
    deletePpl

} from "../controllers/PplController.js";

const router = express.Router();

router.get('/ppl', getPpl);
router.get('/ppl/:id', getPplById);
router.post('/ppl', createPpl);
router.patch('/ppl/:id', updatePpl);
router.delete('/ppl/:id', deletePpl);


export default router;