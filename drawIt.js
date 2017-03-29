"use strict"
var dt = require('./DrawTable.js');
var dataTable = require('./dataTable.js').dataTable
var drawTable = dt.drawTable

function drawIt(data) {
  return drawTable(dataTable(data));
}

module.exports = {
  drawIt: drawIt
};
