function rotate(matrix: number[][]): void {
    const rotatedCells = new Set();
    let n = matrix.length;
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            let rowToRotate = rowIndex;
            let columnToRotate = columnIndex;
            let currentCellVal = matrix[rowIndex][columnIndex];
            while (!rotatedCells.has(`${rowToRotate}-${columnToRotate}`)) {
                const newRowIndex = columnToRotate;
                const newColumnIndex = n - 1 - rowToRotate;

                const nextCellVal = matrix[newRowIndex][newColumnIndex];
                matrix[newRowIndex][newColumnIndex] = currentCellVal;

                const rotatedCellStr = `${rowToRotate}-${columnToRotate}`
                rotatedCells.add(rotatedCellStr);

                rowToRotate = newRowIndex;
                columnToRotate = newColumnIndex;
                currentCellVal = nextCellVal;
            }
        }
    }
}