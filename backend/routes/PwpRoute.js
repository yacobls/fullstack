import express from "express";
import {
    getPwp,
    getPwpById,
    createPwp,
    updatePwp,
    deletePwp

} from "../controllers/PwpController.js";

const router = express.Router();

router.get('/pwp', getPwp);
router.get('/pwp/:id', getPwpById);
router.post('/pwp', createPwp);
router.patch('/pwp/:id', updatePwp);
router.delete('/pwp/:id', deletePwp);


export default router;