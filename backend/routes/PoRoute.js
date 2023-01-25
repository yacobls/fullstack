import express from "express";
import {
    getPo,
    getPoById,
    createPo,
    updatePo,
    deletePo

} from "../controllers/PoController.js";

const router = express.Router();

router.get('/po', getPo);
router.get('/po/:id', getPoById);
router.post('/po', createPo);
router.patch('/po/:id', updatePo);
router.delete('/po/:id', deletePo);


export default router;