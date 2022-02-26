function twoSum(nums: number[], target: number): number[] {
    const neededNums = new Map();
    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];

        if (neededNums.has(currentNumber))
            return [index, neededNums.get(currentNumber)];

        neededNums.set(target - currentNumber, index);
    }
    return [];
}