import User from "../../models/User"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({"email":req.body.email})
        if(user){
            if(req.body.email == user.email && req.body.pass == user.pass){
                res.status(200).json({ success:true,email:user.email,name:user.name})
            }else{
                res.status(400).json({ success:false,msg:"invalid credentials"});
            }
        }else{
            res.status(400).json({ success:false,msg:"no such user found"});
        }
    }
    else {
        res.status(404).json({ error: "This method is not allowed" })
    }

}

export default connectDb(handler);