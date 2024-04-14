const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  // Destructuring the username, email, and password from request body
  const { username, email, password } = req.body;

  // Checking if username, email, or password is missing
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Checking if user with the given email already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User Already registered");
  }

  // Hashing the password using bcrypt library
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password : ", hashedPassword);

  // Creating a new user with hashed password
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${newUser}`);

  // If user creation is successful, then we are sending a success response
  if (newUser) {
    res.status(201).json({ _id: newUser.id, email: newUser.email });
  } else {
    // If user creation fails,then we are sending an error response
    res.status(400);
    throw new Error("User data is not Valid");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }

  res.json({ message: "login the user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
