import jwt from "jsonwebtoken";
import userModel from "../models/User.js";


const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({ message: "You are not logged in" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.id).select("-password");
        next();
    } catch (error) {
          res.status(401).json({ message: "Not authorized" });
    }
}

export default isLoggedIn;