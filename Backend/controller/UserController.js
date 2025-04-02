const userModel = require('../Models/user'); // Import the user model to interact with the database
const bcrypt = require("bcrypt"); // Import bcrypt for hashing passwords
const jwt = require("jsonwebtoken"); // Import jsonwebtoken for authentication

// Create a new user
const CreateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; // Extract user details from request body

        // Check if the user already exists in the database
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ success: false, message: "User Already Exists" });
        }

        // Hash the password before saving to the database for security
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashPassword });

        // Save the new user to the database
        await newUser.save();

        return res.status(201).json({ success: true, message: "Account Created Successfully" });
    } catch (error) {
        console.error("Error adding user:", error.message);
        return res.status(500).json({ success: false, message: "Error adding user"});
    }
};

// User login
const CreateUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body; // Extract login details from request body

        // Find the user by email in the database
        const user = await userModel.findOne({ email }); 
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });  
        }

        // Compare provided password with the hashed password in the database
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(401).json({ success: false, message: "Incorrect username or password" });  
        }

        // Generate a JWT token for authentication, valid for 5 hours
        const token = jwt.sign({ id: user._id }, "secretkeyofnoteapp123@#", { expiresIn: "5h" });
        
        return res.status(201).json({ success: true, token, user: { name: user.name }, message: "Login Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error in login server" });
    }
}

const UserVarify = async (req, res) => {
        return res.status(200).json({success: true, user: req.user})
}

// Export the functions to be used in other parts of the application
module.exports = { CreateUser , CreateUserLogin , UserVarify};
