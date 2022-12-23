const yup = require('yup');

module.exports.HERO_SCHEMA = yup.object({
    nickName: yup.string().required('Nick Name is required').min(1),
    realName: yup.string().required('Real Name is required').min(1),
    originDescription: yup.string(),
    cathPhrase:yup.string()
})



