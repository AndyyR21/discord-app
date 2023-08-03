const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const email = req.body.email;
    // const password = req.body.password;
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // const token = await user.generateAuthToken();
      //create JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.status(200).send({
        userDetails: {
          email: user.email,
          token: token,
          username: user.username,
        },
      });
    }

    return res
      .status(401)
      .send("Invalid E-mail or password. Please try again.");
  } catch (err) {
    return res.status(500).send(`${err}.`);
  }
};

module.exports = postLogin;
