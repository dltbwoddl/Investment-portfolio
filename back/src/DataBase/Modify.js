const pool = require('./pool');
const Promise = require('bluebird');
var async = require('async');

module.exports = {
    //위험자산 목록도 거의 같은 방식으로 구동하므로 같이 사용할 수 있게 만들기.
    HabitListModify: function (req, res) {
        var data = req.body;
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(`SELECT * FROM habitlist`).then((OriginData) => {
                return OriginData
            }).then((OriginData) => {
                Promise.using(pool_1.connect(), conn => {
                    var ids = Object.keys(data);
                    console.log(data)
                    // 수정하기.
                    if (OriginData.length == 0) {
                        OriginData = new Array({
                            id: 0,
                            habit: ''
                        })
                    } else {
                        var UpdateData = ids.filter(e => e <= OriginData[OriginData.length - 1].id)
                        var UpdateDataQuery_1 = ''
                        var UpdateDataQuery_2 = ''
                        UpdateData.forEach((id) => {
                            let d = OriginData.find(o => o.id == id);
                            console.log(d)
                            if (data[id] != d.habit) {
                                UpdateDataQuery_1 += `\n WHEN id=${id} THEN '${data[id]}'`
                                UpdateDataQuery_2 += `${id},`
                            }
                        })
                        if (UpdateDataQuery_2.length != 0) {
                            conn.queryAsync(`UPDATE habitlist SET habit = CASE ${UpdateDataQuery_1} END WHERE id IN(${UpdateDataQuery_2.slice(0, -1)})`).then(() => {
                                console.log('habitlist update success')
                            })
                            console.log(`UPDATE habitlist SET habit = CASE ${UpdateDataQuery_1} END WHERE id IN(${UpdateDataQuery_2.slice(0, -1)})`)
                        }
                    }
                    //추가하기.        
                    var PlusDataIds = ids.filter(e => e > OriginData[OriginData.length - 1].id)
                    PlusQuery = ''
                    PlusDataIds.forEach((id) => {
                        PlusQuery += `('${data[id]}'),`
                    })
                    PlusQuery = PlusQuery.slice(0, -1);
                    if (PlusQuery.length != 0) {
                        conn.queryAsync(`INSERT INTO habitlist (habit) VALUES ${PlusQuery}`)
                            .then(() => {
                                console.log('habitlist plus success')
                            })
                        console.log(`INSERT INTO habitlist (habit) VALUES ${PlusQuery}`);
                    }
                    //삭제하기.
                    var Oids = new Array();
                    OriginData.forEach((d) => {
                        Oids.push(d.id)
                    })
                    var DeleteIds = Oids.filter(e => !ids.includes(`${e}`))
                    if (DeleteIds.length != 0 && Oids[0] != 0) {
                        conn.queryAsync(`DELETE FROM habitlist WHERE id in (${DeleteIds})`)
                            .then(() => {
                                console.log('habitlist delete success')
                            })
                        console.log(`DELETE FROM habitlist WHERE id in (${DeleteIds})`)
                    }
                })
            })

        })

    }
}