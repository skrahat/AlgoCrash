/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  if (s.length == 1) return [1];

  var newS = s.split('');
  //console.log(newS);
  var mapping = new Map();

  //putting all letters in map first before dividing
  for (let char of newS) {
    if (!mapping.has(char)) {
      mapping.set(char, 0);
    }
    const val = mapping.get(char);
    //console.log(char,val + 1);
    mapping.set(char, val + 1);
  }
  console.log('mapping', mapping);

  var result = [];
  var zeroCounter = 0;
  var newItemCounter = 0;
  var set = new Set();
  var left = 0;
  //for loop to iterete through string and check if it gets empty in mapping
  for (var i = 0; i < newS.length; i++) {
    //check if map element reaches to zero
    const val = mapping.get(newS[i]);
    const setCheck = set.has(newS[i]);
    console.log('val', newS[i], val);
    if (!setCheck) {
      set.add(newS[i]);
      console.log('new', i, newItemCounter);

      newItemCounter++;
    }
    //no repeat found
    if (val - 1 == 0) {
      zeroCounter++;
      console.log('zero', i, zeroCounter);
    }
    if (newItemCounter == zeroCounter) {
      console.log('pushing result', i, newS[i]);
      result.push(i + 1 - left);
      newItemCounter = 0;
      left = i + 1;
      zeroCounter = 0;
      set.clear();
    }
    mapping.set(newS[i], val - 1);
  }
  console.log(result);
  //creating a copy of map incase of foud
  return result;

  //return [1];
};
