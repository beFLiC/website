const jwt = require('jsonwebtoken');
const fuser = require('../model/flicUser');
const AllowUser = async (req, res, next) => {
    try {
        const ftoken = req.cookies.flicookie;
        const uverify = jwt.verify(ftoken, process.env.SECRETKEY);
        const rootUser = await fuser.findOne({_id : uverify._id, "tokens.token": ftoken});
        if (!rootUser) {throw new Error('User Not Identified')};
        req.ftoken = ftoken;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (error) {
        res.status(401).send('Unauthorize Token');
        console.log(error);
    }
}

module.exports = AllowUser;