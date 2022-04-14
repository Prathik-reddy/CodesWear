import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({ "email": req.body.email })
        let bytes = CryptoJS.AES.decrypt(user.pass,`${process.env.JWT_SECRET}`);
        let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email == user.email && req.body.pass == decryptedData) {
                let token = jwt.sign({email: user.email, name: user.name }, `${process.env.JWT_TOKEN}`,{expiresIn:"2d"});
                res.status(200).json({token,success: true})
            } else {
                res.status(400).json({ success: false, msg: "invalid credentials" });
            }
        } else {
            res.status(400).json({ success: false, msg: "no such user found" });
        }
    }
    else {
        res.status(404).json({ error: "This method is not allowed" })
    }

}

export default connectDb(handler);