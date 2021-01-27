const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
const port = 3000;

app.get('/TotalEventMoneySend',(req,res)=>{

});

app.get('/HabitListSend',(req,res)=>{

});

app.get('/RiskyListSend',(req,res)=>{

});

app.get('/RiskyEventLIstSend/:EventName',(req,res)=>{

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