const util = require("util");

function convertDate(year,month,day){
    return util.format("%s-%i-%i",year,month,day)
}
module.exports = {convertDate}