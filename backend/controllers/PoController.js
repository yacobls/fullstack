import Po from "../models/PoModel.js";

export const getPo = async(req, res) =>{
    try {
        const response = await Po.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPoById = async(req, res) =>{
    try {
        const response = await Po.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPo = async(req, res) =>{
    try {
        await Po.create(req.body);
        res.status(201).json({msg: "Data Creadted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePo = async(req, res) =>{
    try {
        await Po.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePo = async(req, res) =>{
    try {
        await Po.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}