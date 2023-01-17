import Pwp from "../models/PwpModel.js";

export const getPwp = async(req, res) =>{
    try {
        const response = await Pwp.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPwpById = async(req, res) =>{
    try {
        const response = await Pwp.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPwp = async(req, res) =>{
    try {
        await Pwp.create(req.body);
        res.status(201).json({msg: "Data Creadted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePwp = async(req, res) =>{
    try {
        await Pwp.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePwp = async(req, res) =>{
    try {
        await Pwp.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}