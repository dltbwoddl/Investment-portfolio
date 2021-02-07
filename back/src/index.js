const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")
const GetData = require('./DataBase/GetData')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
const port = 3000;

app.get('/TotalEventMoneySend',(req,res)=>{

});

app.get('/HabitListSend',(req,res)=>{
    GetData.HRSListGet(req, res, 'SELECT habit FROM habitlist')
});

app.get('/RiskyListSend',(req,res)=>{
    GetData.HRSListGet(req,res,'SELECT event FROM riskylist');
});

app.get('/RiskyEventLIstSend/:EventName',(req,res)=>{
    eventname = req.params.EventName;
    console.log(eventname)
    GetData.RiskyEventGet(req,res,eventname.substring(1,))
});

app.get('/RiskyEventDetailSend/:EventName/:categoryname',(req,res)=>{

});

app.get('/SafeListSend',(req,res)=>{

});

app.get('/SafeEventDetailSend/:Eventname',(req,res)=>{

});

app.post('/HabitListModify',(req,res)=>{

});

app.post('/RiskyListMoodify',(req,res)=>{
    
});

app.post('/RiskyEventLIstModify/:EventName',(req,res)=>{
    
});

app.post('/RiskyEventDetailModify/:EventName/:DetalEventName',(req,res)=>{
    
});

app.post('/SafeListModify',(req,res)=>{
    
});

app.post('/SafeEventDetailModify/:Eventname',(req,res)=>{
    
});
app.listen(port, () => {
    console.log('success')
})


// CREATE TABLE RiskyList(
//     -> id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     -> event VARCHAR(30) NOT NULL,
//     -> money INT NOT NULL,
//     -> detail VARCHAR(30) NOT NULL );