const {Hero} = require('../models');

const {HERO_SCHEMA} = require('../chemas/hero.schema');

module.exports.validateHero = async (req, res, next) =>{
    try{
        const validated = await HERO_SCHEMA.validate(req.body);
        if(validated) {
            next()
        }
    } catch(err) {
        next(err);
    }
}


module.exports.getHeroInstance  = async( req, res, next) =>{
    try{
        const {params:{heroId}} = req;
        const hero = await Hero.findByPk(heroId);
        if(!hero) {
            throw new Error ('Hero not found');
        }
        req.heroInstance = hero;
        next();

    } catch(err) {
        next(err);
    }
}