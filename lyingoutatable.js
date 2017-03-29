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

  function drawRow(row, rowNum) {
    var blocks = row.map((cell, colNum) => cell.draw(widths[colNum], heights[rowNum]));
    return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join("\n");
  }

  return rows.map(drawRow).join("\n");
}


module.exports = {
  drawIt: drawIt,
  drawTable: drawTable,
  TextCell: TextCell,
  RTextCell: RTextCell,
  UnderlinedCell: UnderlinedCell
};
