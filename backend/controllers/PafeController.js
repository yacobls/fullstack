import Pafe from "../models/PafeModel.js";

export const getPafe = async(req, res) =>{
    try {
        const response = await Pafe.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPafeById = async(req, res) =>{
    try {
        const response = await Pafe.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPafe = async(req, res) =>{
    try {
        await Pafe.create(req.body);
        res.status(201).json({msg: "Data Creadted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePafe = async(req, res) =>{
    try {
        await Pafe.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePafe = async(req, res) =>{
    try {
        await Pafe.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}