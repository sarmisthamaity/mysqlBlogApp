const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gouri@1434',
    database: 'blogApp'
});

con.connect((err) => {
    if (err) throw err;
    console.log('database connected');
    let sql = `create table IF NOT EXISTS users(
        id int not null primary key,
        name char(50),
        email varchar(50),
        password varchar(267)
    )`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log('table created');
    });

    let ql = `create table IF NOT EXISTS blogs(
        blogId int not null primary key,
        blog varchar(250),
        bId int not null,
        image varchar(266),
        video varchar(266),
        constraint blog_fk 
        foreign key (bId) references users(id)
    )`;
    con.query(ql, (err, result) => {
        if (err) throw err;
        console.log('post table created');
    });
});

module.exports = con;