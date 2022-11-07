const jwt = require('jsonwebtoken');
const user = require('../model/userSchema');
const Middle =async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verify = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await user.findOne({_id : verify._id , "tokens.token" : token});
        console.log(rootUser)

        if(!rootUser){
            res.json(false);
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();

    } catch (error) {
        res.json(false);
        console.log(error);
    }
}

module.exports = Middle;