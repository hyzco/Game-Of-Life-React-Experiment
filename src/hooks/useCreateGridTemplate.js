import React from 'react'
import Array2D from '../utils/Array2D'


const useCreateGridTemplate = (props) => {
    const [template, setTemplate] = React.useState({})
    const { row, col } = props

    React.useEffect(() => {
        const templateArray2D = new Array2D(row, col)
        let templateArr = templateArray2D.getCreated2DArray

        for (let x = 0; x < row; x++) {
            for (let y = 0; y < col; y++) {
                templateArr[x][y] = '.'
            }
        }

        const getTemplateAreas = (grid2D) => "'" + grid2D.map(arr => arr.join(' ')).join("' '") + "'";
        templateArr = getTemplateAreas(templateArr)

        setTemplate({
            template: templateArr,
            rows: row,
            cols: col
        })
    }, [row, col])

    return template
}

export default useCreateGridTemplate