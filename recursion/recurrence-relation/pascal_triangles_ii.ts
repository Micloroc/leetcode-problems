function getRow(rowIndex: number): number[] {
    if (rowIndex === 0)
        return [1];

    if (rowIndex === 1)
        return [1, 1];

    const result = [1];
    const upperRow = getRow(rowIndex - 1);
    for (let i = 1; i < rowIndex; i++)
        result[i] = upperRow[i - 1] + upperRow[i];

    result.push(1);
    return result;
}
