/**
 * This code defines a user schema using mongoose and exports it as a model.
 * The user schema has three fields: username, password, and mail.
 * - The username field is of type String.
 * - The password field is of type String.
 * - The mail field is of type String and has a unique constraint.
 *
 * The exported model is named "User" and is used to interact with the "users" collection in the MongoDB database.
 */
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String, unique: true },
});

module.exports = mongoose.model("User", userSchema);
