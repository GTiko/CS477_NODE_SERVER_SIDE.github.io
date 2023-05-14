// //Create your module here using util moduleconst util = require("util");

const util = require("util");

let convertDate = function (year, month, day) {
    return util.format("%s-%d-%d",year,month,day)
};
module.exports = {convertDate};

// const util = require("util");

// module.exports = {
//     convertDate: function (year,month,day){
//         return util.format("%s-%d-%d",year,month,day)
//     }
// }
