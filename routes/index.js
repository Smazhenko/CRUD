const {Router} = require('express');

const heroRouter = require('./hero.router');
const powerRouter = require('./power.router');
const router = Router();


router.use('/heroes', heroRouter);


router.use('/powers', powerRouter);







module.exports = router;