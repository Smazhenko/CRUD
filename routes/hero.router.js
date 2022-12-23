const {Router} = require('express');

const HeroController = require('../controllers/Hero.controller');
const { getHeroInstance, validateHero } = require('../middlewares/hero.mw');
const pagination = require('../middlewares/pagination.mw')

const heroRouter = Router();

heroRouter.post('/', validateHero,  HeroController.createHero);


heroRouter.put('/:heroId',getHeroInstance,  HeroController.updateHero );

heroRouter.delete('/:heroId',getHeroInstance,  HeroController.deleteHero );



heroRouter.get('/',pagination, HeroController.findAll);


heroRouter.get('/:heroId' , getHeroInstance, HeroController.findOnePk);

// userRouter.delete('/:userId' ,getUserInstance,  UserController.deleteByPK);

// userRouter.put('/:userId',getUserInstance,  UserController.updateUser );

// userRouter.get('/groups/:userId', UserController.getUserWithGroups);

module.exports = heroRouter;