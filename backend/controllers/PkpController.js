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

export const createPkp = async(req, res) =>{
    try {
        await Pkp.create(req.body);
        res.status(201).json({msg: "Data Creadted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePkp = async(req, res) =>{
    try {
        await Pkp.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePkp = async(req, res) =>{
    try {
        await Pkp.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}