import Ppl from "../models/PplModel.js";

export const getPpl = async(req, res) =>{
    try {
        const response = await Ppl.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPplById = async(req, res) =>{
    try {
        const response = await Ppl.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPpl = async(req, res) =>{
    try {
        await Ppl.create(req.body);
        res.status(201).json({msg: "Data Creadted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePpl = async(req, res) =>{
    try {
        await Ppl.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePpl = async(req, res) =>{
    try {
        await Ppl.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}