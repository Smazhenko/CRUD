const {Router} = require('express');

const HeroController = require('../controllers/Hero.controller');
const { getHeroInstance, validateHero } = require('../middlewares/hero.mw');
const pagination = require('../middlewares/pagination.mw');
const {getSuperpower} = require('../middlewares/power.mw')

const heroRouter = Router();

heroRouter.post('/', getSuperpower,validateHero,  HeroController.createHero, HeroController.addPowerToHero);


heroRouter.put('/:heroId',getHeroInstance,  HeroController.updateHero );

heroRouter.delete('/:heroId',getHeroInstance,  HeroController.deleteHero );



heroRouter.get('/',pagination, HeroController.findAll);


heroRouter.get('/:heroId' , getHeroInstance, HeroController.findOnePk);

module.exports = heroRouter;