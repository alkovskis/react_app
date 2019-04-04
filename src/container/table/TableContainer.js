import React, {Component} from 'react'
import Table from './../../component/table/Table'

class TableContainer extends Component {

    state = {
        tableData: [{id: 1, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
            {id: 1, name: 'Ice cream sandwich', calories: 257, fat: 6.0, carbs: 28, protein: 4.5},
            {id: 1, name: 'Eclair', calories: 364, fat: 8.0, carbs: 44, protein: 3.4},
            {id: 1, name: 'Cupcake', calories: 751, fat: 4.0, carbs: 51, protein: 1.1},
            {id: 1, name: 'Gingerbread', calories: 254, fat: 3.0, carbs: 16, protein: 5.0},

        ]
    }

    render() {
        return (
            <div>
                <Table data={this.state.tableData}/>
            </div>
        )
    }
}

export default TableContainer
