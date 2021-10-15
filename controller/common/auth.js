const Jwt = require('jsonwebtoken');
require('dotenv');
const SERECTKEY = "asdfghjkwertyuicvbnwertyuiopasdfghjkl"
const createToken = (data) => {
    return Jwt.sign(data, 
        SERECTKEY)
};

module.exports = {createToken};