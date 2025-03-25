const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/User");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Dummy User Data
const dummyUsers = [
    { name: "John Doe", email: "johndoe@yopmail.com", age: 25 },
    { name: "Jane Doe", email: "janedoe@yopmail.com", age: 30 },
    { name: "Alice Smith", email: "alice@yopmail.com", age: 22 },
    { name: "Bob Johnson", email: "bob@yopmail.com", age: 28 }
];

// Insert Data
const userDatabase = async () => {
    try {
        await User.deleteMany(); 
        await User.insertMany(dummyUsers);
        console.log("Dummy Data Inserted");
    } catch (error) {
        console.error("Seeding Error:", error);
    } finally {
        mongoose.connection.close(); 
        console.log("MongoDB Connection Closed");
    }
};

// Run Seeding Function
userDatabase();
