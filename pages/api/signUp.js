import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == "POST") {
        const {name,email} = req.body
        let u = new User({name, email,pass:CryptoJS.AES.encrypt(req.body.pass,"secret123").toString()})
        await u.save();
        res.status(200).json(u)
    }
    else {
        res.status(404).json({ error: "This method is not allowed" })
    }

}

export default connectDb(handler);