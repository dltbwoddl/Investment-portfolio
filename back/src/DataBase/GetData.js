const pool = require('./pool');
const Promise = require('bluebird');
var async = require('async');


module.exports = {
    HRSListGet: function (req, res, query) {
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(query).then((ret) => {
                console.log(ret)
                res.json(ret)
            }).then(ret => {
                pool_1.end();
            })
                .catch(err => {
                    console.log(err);
                })
        })
    },
    RiskyEventGet: function (req, res, EventName) {
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(`SELECT id,event FROM ${EventName}`).then((ret) => {
                res.json(ret)
            }).then(ret => {
                pool_1.end();
            })
                .catch(err => {
                    console.log(err);
                })
        })
    },

    RiskyEventDetailGet: function (req, res, EventName, DetailEvent) {
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(`SELECT money,detail FROM ${EventName} WHERE event=${DetailEvent}`).then((ret) => {
                res.json(ret)
            }).then(ret => {
                pool_1.end();
            })
                .catch(err => {
                    console.log(err);
                })
        })
    },

    SafeEventDetailGet: function (req, res, Eventname) {
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(`SELECT money,detail FROM safe WHERE event=${Eventname}`).then((ret) => {
                res.json(ret)
            }).then(ret => {
                pool_1.end();
            })
                .catch(err => {
                    console.log(err);
                })
        })
    },

    TotalEventMoneyGet: function (req, res) {
        const pool_1 = new pool();
        var TotalMoney = new Array();
        Promise.using(pool_1.connect(), conn => {
            conn.queryAsync(`SELECT event FROM riskylist`).then((ret_1) => {
                function GetDataList(List, callback) {
                    conn.queryAsync(`SELECT event,money FROM ${List}`)
                        .then(ret => {
                            TotalMoney.push({ ret })
                            callback(null)
                        }).catch(err => {
                            console.log(err);
                            callback(null)
                        });
                }
                async.each(DataList,
                    ret_1,
                    function (err) {
                        console.log(err);
                    }).then(() => {
                        conn.queryAsync(`SELECT event,money FROM SafeList`).then((ret_2) => {
                            // $each(ret_2, (data) => {
                            //     TotalMoney.push(data);
                            // });
                        });
                    });
            });
        });
    }
}