const yup = require('yup');

module.exports.POWER_SCHEMA = yup.object({
    powerName: yup.string().required('power name is required').min(1),
    description: yup.string().min(1),
   
})

