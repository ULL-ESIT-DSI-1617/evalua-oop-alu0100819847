/*var uc = require('./underlinedcell.js')
var di = require('./drawIt.js')
var dt = require('./DrawTable.js')
var rt = require('./RtextCell.js')
var tc = require('./TextCell.js')
*/

// Utils: Monkey Patching
String.prototype.repeat = function(times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += this;
  return result;
}

Array.prototype.range = function(block) {
  var r = [];
  for(var i = this[0]; i<this[1]; i++) {
    r.push(block(i));
  }
  return r;
}
// End Utils


//---------------------------------------------
/*
  return the array of maximum heights of each row
*/
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce((max, cell) => Math.max(max, cell.minHeight()), 0);
  });
}

/*
  return the array of maximum widths of each column
*/
function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce((max, row) => Math.max(max, row[i].minWidth()), 0);
  });
}

module.exports = {
  rowHeights: rowHeights,
  colWidths: colWidths
};
