function reverseString(s: string[]): void {
    for (let index = 0; index < s.length; index++) {
        const currentVal = s[index];
        const oppositeIndex = s.length - 1 - index;
        const oppositeVal = s[oppositeIndex];

        if (index > oppositeIndex)
            return;

        s[index] = oppositeVal;
        s[oppositeIndex] = currentVal;
    }
}