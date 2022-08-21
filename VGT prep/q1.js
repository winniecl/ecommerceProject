var removeElement = function (nums, val) {
  const arr = nums.filter((value) => value != val);
  console.log("====================================");
  console.log(arr);
  console.log("====================================");
  return arr;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] == val) {
  //       nums.splice(i, 1);
  //       i--;
  //     }
  //   }
  //   console.log("====================================");
  //   console.log(nums);
  //   console.log("====================================");
  //return nums;
};
removeElement([3, 2, 2, 3], 3);
