var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  var result = [];
  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip the same result.
    var j = i + 1;
    var k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++; // Skip the same result.
        while (nums[k] === nums[k - 1]) k--; // Skip the same result.
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
