import React, { Component } from 'react';
import axios from 'axios';
import Table from './../../component/table/Table'

class TableContainer extends Component {

    state = {
        tableData: []
    }

    componentDidMount() {
        axios.get('https://api.kanye.rest').then((response) => {
            this.setState({
                tableData: response.data
            });
        });
    }

    render () {
        return (
            <div >
                <Table data={this.state.tableData}/>
            </div>
        );
    }
}

export default TableContainer;
