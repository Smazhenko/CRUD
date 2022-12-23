const {Router} = require('express');

const heroRouter = require('./hero.router');
const router = Router();


router.use('/heroes', heroRouter);







module.exports = router;