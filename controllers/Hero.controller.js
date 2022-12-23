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
};

module.exports.deleteHero = async (req, res, next) =>{
    try{
        const {params: {heroId}} = req;
        const result = await Hero.destroy({
            where: {
                id:heroId
            }
        });
        if(result) {
            return res.status(200).send('sucsess');
        } else {
            res.status(204).send();
        }
     
    } catch(err) {
        next(err);
    }
}

module.exports.findAll = async(req,res,next) =>{
    try{
        const {pagination} = req;
        const heroes = await Hero.findAll({
            ...pagination
        });
        res.status(200).send(heroes);
    } catch(err) {
        next(err)
    }
}

module.exports.findOnePk = async(req, res, next) =>{
    try{
        const {heroInstance} = req;
        return res.status(200).send(heroInstance);
    } catch(err) {
        next(err)
    }
}