const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const port = 3001

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './uploads')
    },
    filename : function(req, file, cb){
        let name = file.originalname
        let regx = /[()\" "]/g;
        name = name.replace(regx,"")
        console.log(name)
        cb(null,name)
    }
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(multer({ storage: storage }).any());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
  });
  
app.use("/prediction", require("./route/prediction"))

app.listen(port, () => {
    console.log('Server run on port :', port)
})