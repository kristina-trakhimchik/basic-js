const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = 0;
  const email1 = email.split('');
    for (let i = 0; i < email1.length; i += 1) {
      if (email1[i] === "@") {
        index = i + 1;
      }
    }
    return email1.slice(index).join('');
  }


module.exports = {
  getEmailDomain
};
