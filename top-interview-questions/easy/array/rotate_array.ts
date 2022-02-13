function rotate(nums: number[], k: number): void {
    const auxNums = nums.slice();
    auxNums.forEach((value, index) => {
        if (k === auxNums.length)
            return;

        let targetIndex = index + (k % auxNums.length);
        const overflows = targetIndex > auxNums.length -1;
        if (overflows)
            nums[targetIndex - auxNums.length ] = value;
        else
            nums[targetIndex] = value;

    });
};
