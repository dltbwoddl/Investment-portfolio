const pool = require('./pool');
const Promise = require('bluebird');
var async = require('async');


module.exports = {
    HabitListModify: function (req, res) {
        var data = req.body;
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(`SELECT id FROM habitlist`).then((ret) => {
                return ret
            }).then((ret) => {
                Promise.using(pool_1.connect(), conn => {
                    //추가하기.        
                    var ids = Object.keys(data);
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
                            console.log('success')
                        })
                    }
                    //수정하기.

                    //삭제하기.

                })
            })

        })

    }
}