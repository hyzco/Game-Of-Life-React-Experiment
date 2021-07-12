import React from 'react'
import './Grid.css'
import Cell from '../Cell/Cell'
import useCreateGridTemplate from '../../hooks/useCreateGridTemplate'


const Grid = (props) => {
    const { gridArray, gridDimensions } = props
    const [gridStyle, setGridStyle] = React.useState({})

    const createdGridTemplate = useCreateGridTemplate(gridDimensions)
    const [cells, setCells] = React.useState([])

    React.useEffect(() => {
        setGridStyle({
            display: 'grid',
            gridTemplateAreas: createdGridTemplate.template,
            gridTemplateRows: '1fr',
            gridTemplateColumns: '1fr',
            gap: '0px 0px'
        })
    }, [createdGridTemplate])

    React.useEffect(() => {
        const renderCell = (gridArray) => {
            const cells = []
            const { row, col } = gridDimensions

            for (let x = 0; x < row; x++) {
                for (let y = 0; y < col; y++) {
                    if (gridArray[x][y] === 0) {
                        cells.push('black')
                    }

                    if (gridArray[x][y] === 1) {
                        cells.push('white')
                    }
                }
            }
            return cells
        }

        const _renderedCells = renderCell(gridArray)

        if (!_renderedCells.length <= 0) {
            setCells(_renderedCells)
        }
    }, [gridArray, gridDimensions])

    return (
        <div className="Grid" style={gridStyle}>
            {cells && cells.map((val, i) => {
                return <Cell key={i} color={val} />
            })}
        </div>
    )
}

export default Grid