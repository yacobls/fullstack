import Pkp from "../models/PkpModel.js";

export const getPkp = async(req, res) =>{
    try {
        const response = await Pkp.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPkpById = async(req, res) =>{
    try {
        const response = await Pkp.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}