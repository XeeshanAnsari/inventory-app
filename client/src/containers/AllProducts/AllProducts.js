import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ProductMiddleware from './../../store/middleware/product_middleware'
import { connect } from 'react-redux';
import './AllProducts.css'


const mapStateToProps = (state) => {
    return {
        productList: state.ProductReducer.products
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProductsByStoreId: (id) => dispatch(ProductMiddleware.getProducts(id)),
        deleteProduct: (id, storeId) => dispatch(ProductMiddleware.deleteProduct(id, storeId)),
        editProduct: (id, product, storeId) => dispatch(ProductMiddleware.editProduct(id, product, storeId))
    }
};


class AllProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDialog: false,
            controlledDate: null
        }
        this.handleDeleteproduct = this.handleDeleteproduct.bind(this)
        this.handleEditproduct = this.handleEditproduct.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.handleAddProduct = this.handleAddProduct.bind(this)

    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount() {
        let storeId = this.props.params.id;
        console.log(storeId)
        this.props.getProductsByStoreId(storeId);
    }

    handleAddProduct() {
        let storeId = this.props.params.id;
        console.log(storeId)
        this.context.router.push(`/addProduct/${storeId}`)
    }

    handleDeleteproduct() {
        let id = this.state.productId;
        let storeId = this.props.params.id;
        this.props.deleteProduct(id, storeId);

    }
    Editproduct(product) {
        this.setState({
            openDialog: true,
            productId: product._id
        })
    }
    

    handleEditproduct(e) {

        e.preventDefault();
        let product = {
            productName: this.refs.productName.getValue(),
            manufacturer: this.refs.manufacturer.getValue(),
            description: this.refs.description.getValue(),
            quantity: this.refs.quantity.getValue(),
            date: this.state.controlledDate,
            price: this.refs.price.getValue(),
        }

        let id = this.state.productId;
        let storeId = this.props.params.id
        this.props.editProduct(id, product, storeId)
        //     .then(() => this.setState({ openDialog: false }))
    }

    handleCloseDialog() {
        this.setState({ openDialog: false })
    }
    handleDateChange = (event, date) => {
        this.setState({
            controlledDate: date,
        })
    }
    render() {
        return (
            <div className='container'>
                <RaisedButton
                    onTouchTap={this.handleAddProduct}
                    style={{ marginBottom: 20 }}
                    label="Add Products"
                    primary={true} />
                <AppBar title="AVAILIABLE Product" />
                <Table className="Table">
                    <TableHeader displayRowCheckbox={false} >
                        <TableRow  >
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn >Product Name</TableHeaderColumn>
                            <TableHeaderColumn>Manufacturer</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Quantity</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            <TableHeaderColumn>Price</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.props.productList.map((product, i) => {
                                return (
                                    <TableRow key={product._id} onTouchTap={() => this.Editproduct(product)}>
                                        <TableRowColumn >{i + 1}</TableRowColumn>
                                        <TableRowColumn >{product.productName}</TableRowColumn>
                                        <TableRowColumn >{product.manufacturer}</TableRowColumn>
                                        <TableRowColumn >{product.description}</TableRowColumn>
                                        <TableRowColumn >{product.quantity}</TableRowColumn>
                                        <TableRowColumn >{product.date}</TableRowColumn>
                                        <TableRowColumn >{product.price}</TableRowColumn>

                                    </TableRow>
                                )

                            })
                        }

                    </TableBody>
                </Table>

                <Dialog
                    title="Edit product"
                    style={{ textAlign: 'center' }}
                    modal={false}
                    open={this.state.openDialog}
                    onRequestClose={this.handleCloseDialog}
                    autoScrollBodyContent={true}
                >
                    <form  >
                        <TextField
                            ref="productName"
                            floatingLabelText="Product Name"
                            hintText="Product Name"
                            fullWidth={true}
                            required
                        />

                        <TextField
                            ref="manufacturer"
                            floatingLabelText="Manufacturer"
                            hintText="Manufacturer"
                            fullWidth={true}
                            required
                        />

                        <TextField
                            ref="description"
                            floatingLabelText="Description"
                            hintText="Description"
                            fullWidth={true}
                            required
                        /><TextField
                            ref="quantity"
                            floatingLabelText="Quantity"
                            hintText="Quantity"
                            type="number"
                            fullWidth={true}
                            required
                        />
                        <DatePicker
                            value={this.state.controlledDate}
                            onChange={this.handleDateChange.bind(this)}
                            floatingLabelText="Date"
                            hintText="Date"
                            fullWidth={true}
                            required
                        />
                        {/*<TextField
                            ref="date"
                            floatingLabelText="Date"
                            hintText="Date"
                            fullWidth={true}
                            required
                        />*/}
                        <TextField
                            ref="price"
                            type="number"
                            floatingLabelText="Price"
                            hintText="Price"
                            fullWidth={true}
                            required
                        />

                        <div style={{ textAlign: 'center' }}>
                            <RaisedButton
                                className='dialog-btn'
                                onTouchTap={this.handleCloseDialog}
                                label="Cancel"
                                primary={true} />
                            <RaisedButton
                                className='dialog-btn'
                                secondary={true}
                                label="Delete"
                                onTouchTap={this.handleDeleteproduct} />
                            <RaisedButton
                                onTouchTap={this.handleEditproduct}
                                className='dialog-btn'
                                label="Save"
                                primary={true} />
                        </div>
                    </form>
                </Dialog>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
