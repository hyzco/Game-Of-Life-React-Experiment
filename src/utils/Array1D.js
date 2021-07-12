/* 1D array  */

class Array1D {
     static create1DArray = (arrayLength) => {
        let arr = []
        for (let index = 0; index < arrayLength; index++) {
            arr.push(Math.floor(Math.random() * 2))
        }
        return arr
    }
}

export default Array1D