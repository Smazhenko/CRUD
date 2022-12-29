const {Router} = require('express');
const mwPower = require('../middlewares/power.mw');



const powerRouter = Router();

powerRouter.post('/',mwPower.validatePower, mwPower.createPower );



module.exports = powerRouter;