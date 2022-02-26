function isValidSudoku(board: string[][]): boolean {
    const columnSets = [];
    const squareSets = [];
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        const currentRow = board[rowIndex];
        const rowSet = new Set();

        for (let columnIndex = 0; columnIndex < currentRow.length; columnIndex++) {
            const currentCellVal = currentRow[columnIndex];
            if (columnIndex % 3 === 0 && rowIndex % 3 === 0)
                squareSets.push(new Set());
            const currentSquareSet = squareSets[((Math.floor(rowIndex / 3)) * 3) + (Math.floor(columnIndex / 3))];

            if (rowIndex === 0)
                columnSets.push(new Set());

            const currentColumnSet = columnSets[columnIndex];
            if (rowSet.has(currentCellVal) || currentColumnSet.has(currentCellVal) || currentSquareSet.has(currentCellVal))
                return false;

            if (currentCellVal === '.')
                continue;
            rowSet.add(currentCellVal);
            currentColumnSet.add(currentCellVal);
            currentSquareSet.add(currentCellVal);
        }
    }

    return true;
}