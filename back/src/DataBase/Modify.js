const pool = require('./pool');
const Promise = require('bluebird');
var async = require('async');


module.exports = {
    HabitListModify: function (req, res) {
        var data = req.body;
        console.log(data)
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(`SELECT * FROM habitlist`).then((ret) => {
                return ret
            }).then((ret) => {
                Promise.using(pool_1.connect(), conn => {
                    var ids = Object.keys(data);
                    console.log(ret)
                    //수정하기.
                    var UpdateData=ids.filter(e =>e<ret[ret.length-1].id)
                    console.log(UpdateData)
                    var UpdateDataQuery_1=''
                    var UpdateDataQuery_2=''
                    // ret.forEach((d)=>{
                    //     if(data[d.id]!=d.habit){
                    //         UpdateDataQuery_1+=`\n WHEN id=id=${d.id} THEN '${data[d.id]}'`
                    //     }
                    // })
                    UpdateData.forEach((id)=>{
                        if(data[id]!=ret[id-1].habit){
                            UpdateDataQuery_1+=`\n WHEN id=${id} THEN '${data[id]}'`
                            UpdateDataQuery_2+=`${id},`
                        }
                    })
                    conn.queryAsync(`UPDATE habitlist SET habit = CASE ${UpdateDataQuery_1} END WHERE id IN(${UpdateDataQuery_2.slice(0,-1)})`).then(()=>{
                        console.log('habitlist update success')
                    })

                    //추가하기.        
                    var PlusDataIds=ids.filter(e =>e>ret[ret.length-1].id)
                    PlusQuery = ''
                    PlusDataIds.forEach((id)=>{
                        console.log(data[id])
                        PlusQuery+=`('${data[id]}'),`
                    })
                    PlusQuery=PlusQuery.slice(0,-1);
                    if(PlusQuery.length !=0){
                        conn.queryAsync(`INSERT INTO habitlist (habit) VALUES ${PlusQuery}`)
                        .then(()=>{
                            console.log('habitlist plus success')
                        })
                    }
                    //삭제하기.

                })
            })

        })

    }
}