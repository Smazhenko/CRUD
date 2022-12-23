const {Hero} = require('../models');

module.exports.createHero = async (req, res, next) =>{
    try{
        const createdHero = await Hero.create(req.body);
        return res.status(201).send(createdHero);
    } catch(err) {
        next(err)
    }
};

module.exports.updateHero = async( req, res, next) =>{
    try{
        const {heroInstance} = req;
        const result = await heroInstance.update(req.body);
        res.status(200).send(result);
    } catch(err) {
        next(err);
    }
}