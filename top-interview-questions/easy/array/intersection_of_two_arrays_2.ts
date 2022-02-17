function intersect(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];
    for (let num1 of nums1) {
        for (let [index, num2] of nums2.entries()) {
            if (num1 !== num2)
                continue;
            result.push(num1);
            nums2.splice(index, 1);
            break;
        }
    }

    return result;
};