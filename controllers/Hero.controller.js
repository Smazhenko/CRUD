const {Hero} = require('../models');

module.exports.createHero = async (req, res, next) =>{
    try{
        const createdHero = await Hero.create(req.body);
        return res.status(201).send(createdHero);
    } catch(err) {
        next(err)
    }
};