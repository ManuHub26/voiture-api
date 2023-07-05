const Voiture = require('../models/voitureModel');

exports.selectAllCar = async (req, res) => {
    try {
        await Voiture.find()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(404).json({message: err}))
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.createCar = async (req, res) => {
    const {name, model, brand, transmission} = req.body;
    try {
        const voiture = await Voiture({name, model, brand, transmission});
        voiture.save()
            .then(saveCar => res.status(200).json(saveCar))
            .catch(err => res.status(404).json({message: err}))
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.selectCar = async (req, res) => {
    try {
        await Voiture.findById({
            _id: req.params.id
        })
            .then(data => res.status(200).json(data))
            .catch(() => res.status(404).json({message: 'Voiture non trouvée'}))
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.updateCar = async (req, res) => {
    try {
        await Voiture.findByIdAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            model: req.body.model,
            brand: req.body.brand,
            transmission: req.body.transmission,
        })
            .then(() => res.status(200).json({message: 'Voiture bien modifiée'}))
            .catch(() => res.status(404).json({message: 'Voiture non trouvée'}))
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.deleteCar = async (req, res) => {
    try {
        await Voiture.findByIdAndDelete({
            _id : req.params.id
        })
            .then(() => res.status(200).json({message: 'Voiture bien supprimée'}))
            .catch(() => res.status(404).json({message: 'Voiture non trouvée'}))
    } catch (error) {
        res.status(500).json({message: error});
    }
}