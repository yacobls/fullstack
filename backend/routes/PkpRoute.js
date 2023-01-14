import express from "express";
import {
    getPkp,
    getPkpById,
    createPkp,
    updatePkp,
    deletePkp

} from "../controllers/PkpController.js";

const router = express.Router();

router.get('/pkp', getPkp);
router.get('/pkp/:id', getPkpById);
router.post('/pkp', createPkp);
router.patch('/pkp/:id', updatePkp);
router.delete('/pkp/:id', deletePkp);


export default router;