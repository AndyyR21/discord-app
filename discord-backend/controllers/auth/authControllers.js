/**
 * This code exports an object named "controllers" that contains two properties, "postLogin" and "postRegister".
 * - The "postLogin" property is assigned the value of the module exported from the "./postLogin" file.
 * - The "postRegister" property is assigned the value of the module exported from the "./postRegister" file.
 *
 * These properties can be accessed using the dot notation, e.g., controllers.postLogin, controllers.postRegister.
 *
 * It is assumed that the "./postLogin" and "./postRegister" files export functions that handle login and registration functionality, respectively.
 * These functions can be used as controllers in a Node.js application to handle corresponding HTTP requests.
 */
const postLogin = require("./postLogin");
const postRegister = require("./postRegister");

exports.controllers = {
  postLogin,
  postRegister,
};
