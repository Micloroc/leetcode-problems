function maxProfit(prices: number[]): number {
    let possibleBuyIndex = 0;
    let prevPrice = -1;
    let hasIncreasedSmth = false;
    let result = 0;

    prices.forEach((currentIndexPrice, index) => {
        let possibleBuyPrice = prices[possibleBuyIndex];
        if (prevPrice > currentIndexPrice && hasIncreasedSmth && prevPrice !== -1) {
            result += prevPrice - possibleBuyPrice;
            possibleBuyIndex = index;
            prevPrice = currentIndexPrice;
            hasIncreasedSmth = false;
            return;
        }

        if (currentIndexPrice > possibleBuyPrice) {
            hasIncreasedSmth = true;
            prevPrice = currentIndexPrice;
            return;
        }

        possibleBuyIndex = index;
        prevPrice = currentIndexPrice;
    });

    if (hasIncreasedSmth)
        result += prevPrice - prices[possibleBuyIndex];

    return result;
};