const CustomError = require("../extensions/custom-error");


module.exports = function countCats(backyard) {
  return backyard.filter(cats => cats.includes('^^')).length;
};
