const {Router} = require('express');
const multer = require('multer');

const HeroController = require('../controllers/Hero.controller');
const { getHeroInstance, validateHero } = require('../middlewares/hero.mw');
const pagination = require('../middlewares/pagination.mw');
const {getSuperpower} = require('../middlewares/power.mw')
const {STATIC_PATH} = require('../config/path.config')
const heroRouter = Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,STATIC_PATH)
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})

const upload = multer({storage});

heroRouter.post('/', getSuperpower,validateHero,  HeroController.createHero, HeroController.addPowerToHero);

heroRouter.post('/:heroId',upload.single('HeroImage'),HeroController.addImage )


heroRouter.put('/:heroId',getHeroInstance,  HeroController.updateHero );

heroRouter.delete('/:heroId',getHeroInstance,  HeroController.deleteHero );



heroRouter.get('/',pagination, HeroController.findAll);


heroRouter.get('/:heroId' , getHeroInstance, HeroController.findOnePk);

module.exports = heroRouter;