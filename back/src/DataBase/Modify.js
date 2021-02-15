const pool = require('./pool');
const Promise = require('bluebird');
var async = require('async');


module.exports = {
    HabitListModify: function (req, res) {
        var data = req.body;
        console.log(data)
        const pool_1 = new pool();
        Promise.using(pool_1.connect(), conn => {
            //추가하기.

            //수정하기.

            //삭제하기.
            
        })
    }
}