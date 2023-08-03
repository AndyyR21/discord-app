const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.exists({ email: email.toLowerCase() });

    // check if user exists
    if (userExists) {
      return res.status(409).send("E-mail already in use.");
    }

    // encrypt/hash password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create the user in the database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    //create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    // const token = "JWT TOKEN";

    res.status(201).send({
      userDetails: {
        email: user.email,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).send(`${err}.`);
  }
};

module.exports = postRegister;
