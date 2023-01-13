import Pkp from "../models/PkpModel.js";

export const getPkp = async(req, res) =>{
    try {
        const response = await Pkp.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}