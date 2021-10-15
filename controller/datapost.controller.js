const con = require('../connection/connect');

const createpost = (req, res) => {
    const postdata = {
        blogId: req.body.blogId,
        blog: req.body.blog
    };
    let sql = 'insert into blogs set?';
    con.query(sql, postdata, (err, result) => {
        if(err){
            return res.status(400).send({
                status: 400,
                error: err
            });
        } else{
            return res.status(200).send({
                status: 200,
                message: 'data posted'
            });
        };
    });
};

module.exports = {
    createpost
};