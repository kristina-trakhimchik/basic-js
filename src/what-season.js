const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  const datePars = Date.parse(date);
  if (isNaN(datePars) || !date instanceof Date || date.toString() == "[object type]") {
    return 'Invalid date!';
  }
    const month = new Date(datePars).getMonth() + 1;
    switch (month) {
      case 1 :
      case 2 :
      case 12 :
        return 'winter';
      case 3 :
      case 4 :
      case 5 :
        return 'spring';
      case 6 :
      case 7 :
      case 8 :
        return 'summer';
      case 9 :
      case 10 :
      case 11 :
        return 'autumn';
    }
  }

module.exports = {
  getSeason
};
