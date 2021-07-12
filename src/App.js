import React, { useEffect, useState } from 'react'
import './App.css';

import Grid from './components/Grid/Grid'
import Array2D from './utils/Array2D'

const DIMENSIONS = { rows: 60, cols: 60 };

const countNeighbors = (grid, x, y) => {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + DIMENSIONS.cols) % DIMENSIONS.cols;
      let row = (y + j + DIMENSIONS.rows) % DIMENSIONS.rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

const createNewGenArray = (gridArray) => {
  let nextGen = new Array2D(DIMENSIONS.rows, DIMENSIONS.cols)
  let nextGenArr = nextGen.getCreated2DArray

  for (let i = 0; i < DIMENSIONS.cols; i++) {
    for (let j = 0; j < DIMENSIONS.rows; j++) {
      let state = gridArray[i][j];
      
      let neighbors = countNeighbors(gridArray, i, j);

      if (state === 0 && neighbors === 15) {
        nextGenArr[i][j] = 1;
      } else if (state === 1 && (neighbors < 4 || neighbors > 6)) {
        nextGenArr[i][j] = 0;
      } else {
        nextGenArr[i][j] = state;
      }
    }
  }

  return nextGenArr
}

function App() {
  const array2D = new Array2D(DIMENSIONS.rows, DIMENSIONS.cols)

  const [gridArray, setGridArray] = useState(array2D.getCreated2DArray)
  const [gridDimension,] = useState(array2D.getDimension)

  useEffect(() => {
    setInterval(()=>{
      let nextGenArr = createNewGenArray(array2D.getCreated2DArray)
      setGridArray(nextGenArr)
    },500)
  }, [array2D.getCreated2DArray])


  return (
    <div className="App">
      <header className="App-header">
        <Grid rows={50} cols={50} gridArray={gridArray} gridDimensions={gridDimension} />
      </header>
    </div>
  );
}

export default App;
