const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send({ data : 'Hello react!! I am server~~'  });
})


app.get('/api/products', (req, res) => {
    let sql = 'select username from user where userid = "sykim"';
    db.query(sql, function (err, data, fields) {
        if(!err) {
            res.send(data[0]); 
            console.log('users: ',data[0]);
        }else 
            res.send(err);
    
    });
});

app.post('/api/signup',(req,res)=>{
    let sql = 'insert into test_db.user(pw, userid, username) values ("1111", "jinkyu2", "진규2");'
    db.query(sql, function (err, data, fields) {
        if(!err) {
            res.send(data[0]); 
            console.log('users: ',data[0]);
        }else 
            res.send(err);
    
    });
});
app.post("/member", (req, res) => {
    console.log("/member", req.body.email);
    var email = req.body.email;
    var password = req.body.password;
    var nick = req.body.nick;
    const sql = "insert into test_db.user(userid,pw,username) values (?,?,?);";
    db.query(sql, [email, password, nick], (err, result) =>{
        if(!err) {
            res.send(result);
        }else 
            res.send(err);
    });
});
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})