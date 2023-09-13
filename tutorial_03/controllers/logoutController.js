const User = require('../model/User');

const handleLogout = async (req, res) => {
    // on client also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //no content
    const refreshToken = cookies.jwt;

    //is refreshToken in DB?
    const foundUser = await User.findOne({username:user}).exec();
    if (!foundUser) {
        res.clearCookie('jwt',{httpOnly: true})
        return res.sendStatus(204);
    }
    
    //delete the refresh token in DB 
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt',{httpOnly: true}); // secure: true = only on https
    res.sendStatus(204);
}
module.exports = { handleLogout }