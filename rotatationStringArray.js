const sample = ['abc', 'efg', 'bcd', 'cde', 'bcd'];
let result = [];

function rotation(input) {
  const pairSet = new Set();

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i].charAt(0) === input[j].charAt(1)) {
        const pair = [input[i], input[j]];

        if (!pairSet.has(pair.toString())) {
          result.push(pair);
          pairSet.add(pair.toString());
        }
      } else if (input[i].charAt(1) === input[j].charAt(0)) {
        const pair = [input[i], input[j]];

        if (!pairSet.has(pair.toString())) {
          result.push(pair);
          pairSet.add(pair.toString());
        }
      }
    }
  }

  console.log(result);
}

rotation(sample);
