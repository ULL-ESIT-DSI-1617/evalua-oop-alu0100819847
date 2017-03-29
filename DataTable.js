var RTextCell = require('./RtextCell.js').RTextCell
var TextCell = require('./TextCell.js').TextCell
var UnderlinedCell = require('./underlinedcell.js').UnderlinedCell
//String = require('./lyingoutatable.js').String
//Array = require('./lyingoutatable.js').Array

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      // return new TextCell(String(row[name]));
      var value = row[name];
      //  if (typeof value == "number")
      if (/^\s*[-+]?\d+([.]\d*)?([eE][-+]?\d+)?\s*$/.test(value))
        return new RTextCell(String(value));
      else
        return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

module.exports = {
  dataTable: dataTable
};
