function fib(n: number): number {
    const map = new Map();

    function recursionFib(n: number): number {
        if (n === 0 || n === 1)
            return n;

        let mapValue = map.get(n);
        if (mapValue !== undefined) return mapValue;

        let fibOne = recursionFib(n - 1);
        map.set(n - 1, fibOne);
        let fibTwo = recursionFib(n - 2);
        map.set(n - 2, fibTwo);
        return fibOne + fibTwo;
    }

    return recursionFib(n);
}
