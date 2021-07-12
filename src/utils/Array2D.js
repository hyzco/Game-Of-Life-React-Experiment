import Array1D from './Array1D'

/* simple 2D Array generator in JavaScript */
class Array2D extends Array1D {
    static created2dArray = null
    static rows = null
    static cols = null

    constructor(rows, cols) {
        super()
        Array2D.rows = rows
        Array2D.cols = cols
        Array2D.created2dArray = Array2D.create2dArray(rows, cols)
    }

    get getDimension() {
        return { row: Array2D.rows, col: Array2D.cols }
    }

    get getCreated2DArray() {
        return Array2D.created2dArray
    }

    static createArray = (arrayLength) => {
        return Array2D.create1DArray(arrayLength)
    }

    static create2dArray = (rows, cols) => {
        let new2dArray = this.createArray(rows);

        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < cols; y++) {
                new2dArray[x] = this.createArray(cols);
            }
        }
        return new2dArray
    }
}

export default Array2D