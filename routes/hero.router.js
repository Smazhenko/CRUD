const {Router} = require('express');

const HeroController = require('../controllers/Hero.controller');
const { getHeroInstance, validateHero } = require('../middlewares/hero.mw');

// const { getUserInstance, validateUser } = require('../middlewares/user.mw');

const heroRouter = Router();

heroRouter.post('/', validateHero,  HeroController.createHero);


heroRouter.put('/:heroId',getHeroInstance,  HeroController.updateHero );




// userRouter.get('/',UserController.findAll);


// userRouter.get('/:userId' , getUserInstance, UserController.findOnePk);

// userRouter.delete('/:userId' ,getUserInstance,  UserController.deleteByPK);

// userRouter.put('/:userId',getUserInstance,  UserController.updateUser );

// userRouter.get('/groups/:userId', UserController.getUserWithGroups);

module.exports = heroRouter;