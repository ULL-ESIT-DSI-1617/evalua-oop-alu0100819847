"use strict"
var rowHeights = require('./lyingoutatable.js').rowHeights
var colWidths = require('./lyingoutatable').colWidths

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map((cell, colNum) => cell.draw(widths[colNum], heights[rowNum]));
    return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join("\n");
  }

  return rows.map(drawRow).join("\n");
}
  module.exports = {
    drawTable: drawTable
  };
