import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import saleProductMiddleware from './../../store/middleware/sale_product_middleware'
import { connect } from 'react-redux';
import './AllSales.css'


const mapStateToProps = (state) => {
    return {
        saleList: state.SaleProductReducer.sales
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSalesByStoreId: (id) => dispatch(saleProductMiddleware.getSales(id)),
       
    }
};


class AllSales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDialog: false,

        }

        this.handleCloseDialog = this.handleCloseDialog.bind(this)

    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount() {
        let storeId = this.props.params.id;
        console.log(storeId)
        this.props.getSalesByStoreId(storeId);
    }


    handleCloseDialog() {
        this.setState({ openDialog: false })
    }

    render() {
        return (
            <div className='container'>

                <AppBar title="SALE REPORT" showMenuIconButton={false} />
                <Table className="Table">
                    <TableHeader displayRowCheckbox={false} >
                        <TableRow  >
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn >Product Name</TableHeaderColumn>
                            <TableHeaderColumn>Quantity</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            <TableHeaderColumn>Unit Price</TableHeaderColumn>
                            <TableHeaderColumn>Total Price</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.props.saleList.map((sale, i) => {
                                return (
                                    <TableRow key={sale._id}>
                                        <TableRowColumn >{i + 1}</TableRowColumn>
                                        <TableRowColumn >{sale.productName}</TableRowColumn>
                                        <TableRowColumn >{sale.quantity}</TableRowColumn>
                                        <TableRowColumn >{sale.date}</TableRowColumn>
                                        <TableRowColumn >{sale.unitPrice}</TableRowColumn>
                                        <TableRowColumn >{sale.totalPrice}</TableRowColumn>

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



export default connect(mapStateToProps, mapDispatchToProps)(AllSales);
