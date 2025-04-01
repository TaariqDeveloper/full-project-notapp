// const jwt = require("jsonwebtoken")
// const User = require("../Models/user")

// const middleware = async (req, res, next) => {
//         try {
//                 const token = req.headers.authorization.split('')[1]
//                 if (!token) {
//                         return res.status(401).json({ success: false, message: "Unauthorized" })
//                 }
//                 const decoded = jwt.verify(token, "secretkeyofnoteapp123@#");
//                 if (!decoded) {
//                          return res.status(401).json({ success: false, message: "wrong token" })
//                 }
//         } catch (error) {
                
//         }
// }

const jwt = require("jsonwebtoken");
const User = require("../Models/user");

const middleware = async (req, res, next) => {
    try {
        // Ensure the Authorization header exists
        if (!req.headers.authorization) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        // Extract the token from the Bearer string
        const token = req.headers.authorization.split(" ")[1];

        // Check if token is missing
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        // Verify token
        const decoded = jwt.verify(token, "secretkeyofnoteapp123@#");

        if (!decoded) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }

        // Check if user exists
            const user = await User.findById({_id: decoded.id });

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

            // Attach user info to request object
      const newUser = { name: user.name , id: user.id}
        req.user = newUser
        next(); // Move to the next middleware
    } catch (error) {
    
        return res.status(500).json({ success: false, message: "please Login" });
    }
};

module.exports = middleware;
