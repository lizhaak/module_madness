var randNum = require('./randomNumber.js');
var toUSD = require('./convertToUSD.js');

exports.finalNumber = function() {
  return toUSD(randNum(100, 1000000));
}

exports.acctBal = function() {
  return 'Account balance: \n';
}
