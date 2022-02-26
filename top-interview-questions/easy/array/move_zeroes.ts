function moveZeroes(nums: number[]): void {
    const zeroIndexes: number[] = [];
    for (let index = 0; index < nums.length; index++) {
        const currentNum = nums[index];
        if (currentNum === 0) {
            zeroIndexes.push(index);
            continue;
        }

        if (zeroIndexes.length === 0)
            continue;

        const zeroIndexToSwap = zeroIndexes.shift() as number;
        nums[index] = 0;
        zeroIndexes.push(index);
        nums[zeroIndexToSwap] = currentNum;
    }
}
