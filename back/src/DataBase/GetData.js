const pool = require('./pool');
const Promise = require('bluebird');

module.exports = {
    HRSListGet: function (req, res, name, colname) {
        const pool = new pool();
        Promise.using(pool.connect(), conn => {
            conn.queryAsync(`SELECT ${colname} FROM ${name}`).then((ret) => {
                res.json(ret)
            }).then(ret => {
                pool.end();
            })
            .catch(err => {
                console.log(err);
            })
        })
    },
    RiskyEventGet: function (req, res, EventName) {
        const pool = new pool();
        Promise.using(pool.connect(), conn => {
            conn.queryAsync(`SELECT id,event FROM ${EventName}`).then((ret) => {
                res.json(ret)
            }).then(ret => {
                pool.end();
            })
            .catch(err => {
                console.log(err);
            })
        })
    },

    RiskyEventDetailGet: function (req, res, EventName, DetailEvent) {
        const pool = new pool();
        Promise.using(pool.connect(), conn => {
            conn.queryAsync(`SELECT money,detail FROM ${EventName} WHERE event=${DetailEvent}`).then((ret) => {
                res.json(ret)
            }).then(ret => {
                pool.end();
            })
            .catch(err => {
                console.log(err);
            })
        })
    },

    SafeEventDetailGet: function (req, res, Eventname) {
        const pool = new pool();
        Promise.using(pool.connect(), conn => {
            conn.queryAsync(`SELECT money,detail FROM safe WHERE event=${Eventname}`).then((ret) => {
                res.json(ret)
            }).then(ret => {
                pool.end();
            })
            .catch(err => {
                console.log(err);
            })
        })
    },

    TotalEventMoneyGet: function (req, res) {

    }
}