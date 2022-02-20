/*function plusOne(digits: number[]): number[] {
    for (let index = digits.length -1; index >= 0; index--) {
        let currentDigit = digits[index];
        digits[index] = currentDigit + 1;

        if (currentDigit !== 9)
            return digits;

        digits[index] = 0;
        if (index === 0) {
            digits.unshift(1);
            return digits;
        }
    }

    return digits;
};*/

//Recursion
function plusOne(digits: number[]): number[] {
    let lastIndex = digits.length - 1;
    let lastDigit = digits[lastIndex];
    if (lastDigit !== 9) {
        digits[lastIndex] = lastDigit + 1;
        return digits;
    }
    if (digits.length === 1)
        return [1, 0];

    return [...plusOne(digits.slice(0, lastIndex)), 0];
};