const con = require('../connection/connect');
const Jwt = require('jsonwebtoken')
const Auth = require('./common/auth');
const { data } = require('cheerio/lib/api/attributes');

const createUser = async(req, res) => {
    const {id, name, email, password} = req.body;
    const data = {
        id: id,
        name: name,
        email: email,
        password: password
    };

    con.query(`insert into users set?`, data, (err, result) => {
        if (err) throw err;
        console.log('data created');
        return res.status(200).send({
            status: 200,
            data
        });
    });
};


const login = (req, res) => {
    const userdata = {
        email: req.body.email
    };
    const createToken = Auth.createToken(userdata);
    let sql = "select * from users where?";
    con.query(sql, userdata, function (err, result) {
        console.log(result, "KKKKK");
        const response = {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            token: createToken
        };
        if (err) {
            return res.status(400).send({
                error: err,
                status: 400
            });
        } else if (result[0].email == userdata.email) {
            return res.status(200).send({
                status: 200,
                message: 'login succesfully',
                response
            });
        } else {
            return res.status(302).send({
                status: 302,
                message: 'user is not exists'
            });
        };
    });
};


module.exports = {
    createUser,
    login
};