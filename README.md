# User API - Node.js + Express + MongoDB

A simple Node.js backend that connects to MongoDB, offering endpoints to fetch user data. It includes basic user validation (age over 21) and a script to seed dummy users for testing.

## Approach

- This backend application is built with Node.js and connects to a MongoDB database to manage user data.
- It provides routes to get all users or a specific user by ID, ensuring the user is over 21 years old.
- For testing, dummy user data is inserted into the database using a script (userdata.js) to simulate real-world data.

## Features

- Fetch a user by ID
- Return **404** if the user does not exist or is **≤ 21** years old
- MongoDB connection with **Mongoose**

## Installation

1. **Clone the repository**

   - `git clone https://github.com/iPriyaranjan/userinfo.git`

2. **Navigate to the Project folder**
   `cd userinfo`

4. **Create a `.env` file in the root folder and define `MONGO_URI="YOUR_MONGO_DB_URL"` in it.**

3. **Install dependencies**
   `npm install`


## For dummy data insert

    npm run insert

## For server start

    npm start

## For All Users data Get

    http://localhost:5000/users

## For Single User data get

    http://localhost:5000/users/{user._id}

