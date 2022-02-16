function singleNumber(nums: number[]): any {
    const map = new Map()
    for (let index = 0; index < nums.length; index++) {
        let currentNum = nums[index];
        map.set(currentNum, map.get(currentNum) ? map.get(currentNum) + 1 : 1)
    }
    for (let index = 0; index < [...map.values()].length; index++) {
        let currentNum = [...map.values()][index];
        if (currentNum === 1)
                return [...map.keys()][index];
    }
};
