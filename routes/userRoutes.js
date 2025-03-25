const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");

const router = express.Router();

/** 
 * ✅ Get All Users 
 * URL: GET /users/
 */
router.get("/", async (req, res) => {
    try {
        const users = await User.find().select("name email age");
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

/** 
 * ✅ Get User by ID 
 * URL: GET /users/:id
 */
router.get("/:id", async (req, res) => {
    try {
       
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid User ID" });
        }

       
        const user = await User.findOne({ _id: req.params.id, age: { $gt: 21 } }).select("name email age");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
