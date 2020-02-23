module.exports = function countCats(backyard) {
  let numCats = 0;
  let cat = "^^";
  for (let row of backyard) {
    for (let something of row) {
      if (typeof (something) == "string" && something.includes(cat))
        if (something.length == cat.length)
          numCats++;
    }
  }
  return numCats;
};
