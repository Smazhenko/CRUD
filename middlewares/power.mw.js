const {POWER_SCHEMA} = require('../chemas/power.schema');

 const {Superpower} = require('../models');
const { all } = require('../routes/hero.router');

module.exports.validatePower = async (req, res, next) =>{
    
    try{
        const validated = await POWER_SCHEMA.validate(req.body);
        if(validated) {
            next()
        }
    } catch(err) {
        next(err);
    }
}


module.exports.createPower = async (req, res,next) =>{
    try{
        const createdPower = await Superpower.create(req.body);
        return res.status(201).send(createdPower);
    } catch(err) {
        next(err)
    }
}

module.exports.getSuperpower = async (req, res, next) =>{
    const {body: {powerName}} = req;
    
    try{
        if(powerName) {
            const resultArray = [];
            const powersId = [];
            
            if(Array.isArray(powerName)) {
                for(str of powerName) {
                    resultArray.push (await Superpower.findOrCreate({
                        where:{
                            powerName: str
                        }
                    }))
                 }
                 for(let i =0; i < resultArray.length; i++) {
                        resultArray[i].map((obj)=>{
                            if(obj.id!= null) {
                                powersId.push(obj.id)
                            }
                        })
                 }
                 req.powerInstanceId = powersId;
                 res.status(200).send(powersId)
            //    return  next();
    
            } else if(typeof powerName == 'string') {
               
              resultArray.push (await Superpower.findOrCreate({
                    where:{
                        powerName
                    }
                }))
                resultArray[0].map((obj)=>{
                    if(obj.id != null) {
                        powersId.push(obj.id)
                    }
                   
                    
                })
                req.powerInstanceId = powersId;
                next();
             
            
         
        } 
    }else{
        req.powerInstanceId = null;
        next();
    }
    }catch(err) {
        next(err)
    }
}



module.exports.getUserWithGroups = async (req, res, next) =>{
    try{
    const {params: {userId}} = req;
    const userWithGroups = await User.findByPk(userId, {
        attributes: {
            exclude: ['password']
        },
        include: [Group]
    });
        res.status(200).send(userWithGroups)
    } catch(err) {
        next(err)
    }
}
