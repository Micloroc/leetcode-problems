function removeDuplicates(nums: number[]): number {
    let highestNum: number = -101;
    let availableIndex: number = -1;
    let count = nums.length;
    nums.forEach(((num, index) => {
        if (num <= highestNum) {
            if (availableIndex === -1)
                availableIndex = index;
            count--;
            return;
        }

        if (availableIndex !== -1) {
            nums[availableIndex] = num;
            availableIndex++;
        }
        highestNum = num;
    }));
    return count;
};





