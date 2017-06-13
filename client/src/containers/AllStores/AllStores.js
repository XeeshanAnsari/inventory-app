import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import StoreMiddleware from './../../store/middleware/store_middleware'
import { connect } from 'react-redux';
import './AllStores.css'


const mapStateToProps = (state) => {
    return {
        storeList: state.StoreReducer.stores
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStores: () => dispatch(StoreMiddleware.getStores())
    }
};


class AllStores extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.getStores();
    }
    render() {
        return (
            <div className='container'>
                <AppBar title="AVAILIABLE STORES" leftIcon='none' />
                <Table className="Table">
                    <TableHeader  displayRowCheckbox={false} >
                        <TableRow  >
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn >Store Name</TableHeaderColumn>
                            <TableHeaderColumn>Location</TableHeaderColumn>
                            <TableHeaderColumn>Edit</TableHeaderColumn>
                            <TableHeaderColumn>Delete</TableHeaderColumn>
                            
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.props.storeList.map((store, i) => {
                                return (
                                    <TableRow key={store._id}>
                                        <TableRowColumn >{i + 1}</TableRowColumn>
                                        <TableRowColumn >{store.storeName}</TableRowColumn>
                                        <TableRowColumn >{store.location}</TableRowColumn>
                                    </TableRow>
                                )

                            })
                        }

                    </TableBody>
                </Table>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AllStores);
