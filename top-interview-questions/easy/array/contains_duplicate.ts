function containsDuplicate(nums: number[]): boolean {
    nums = nums.sort();
    for (let index = 1; index <= nums.length - 1; index++) {
        if (nums[index] === nums[index - 1])
            return true;
    }
    return false;
}