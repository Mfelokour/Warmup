/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/

function twoSum(nums,target){
	var indexArr = [];
	var init = nums[0]
	var initIndex = 0
	for (var i = 1; i < nums.length; i++) {
	 	if (init + nums[i] === target){
	 	indexArr.push(initIndex);
	 	indexArr.push(i);
	 	};
	 	else if (init + nums[i] !== target){
	 	init = nums[i];
	 	initIndex++
	 	};

	};
	return indexArr;
}


