var dt = require('DrawTable.js');
var drawTable = dt.drawTable
function drawIt(data) {
  return drawTable(dataTable(data));
}

module.exports = {
  drawIt: drawIt
};
