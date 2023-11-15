const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../Model/User');
dotenv.config();

const secret = "c2e1086b8aa26ae726efd6635d034d2c79d2beceeb08c2341c0c6002f63721f8";
const userId = "6533cb86a5776f3237517d81";

// Create a payload containing only the necessary data
const payload = {
  userId: userId,
  name: "ram",
};
// Generate a JWT token with the payload
const token = jwt.sign(payload, secret, { expiresIn: '1y' });
console.log(token);
