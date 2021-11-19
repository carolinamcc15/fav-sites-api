const Site = require('../models/Site');

const controller = {};

controller.create = async (req, res) => {
    try {
        const newSite = new Site({
            title: req.body.title,
            url: req.body.url,
        });

        await newSite.save();
        
        return res.status(201).json({ error: false, message: "Site created successfully" });
    } 
    catch(error) {
        return res.status(400).json(error);
    }
}

controller.getAll = async (req, res) => {
    try {
        const sites = await Site.find({});

        return res.status(200).json({
            sites: sites
        })
    }
    catch(error){
        return res.status(400).json(error);
    }
}

controller.edit = async (req, res) => {
    try {
        await Site.updateOne({ _id: req.params.id }, { title: req.body.title, url: req.body.url });

        return res.status(201).json({ error: false, message: "Site updated successfully" })
    }
    catch(error) {
        return res.status(400).json(error);
    }
}

controller.deleteSite = async (req, res) => {
    try {
        await Site.deleteOne({ _id : req.params.id });

        return res.status(200).json({ error: false, message: "Site deleted successfully"});
    } 
    catch(error){
        return res.status(400).json(error);
    }   
}

module.exports = controller;