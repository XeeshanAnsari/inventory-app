import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ProductMiddleware from './../../store/middleware/product_middleware'
import { connect } from 'react-redux';
import './AllProducts.css'


const mapStateToProps = (state) => {
    return {
        productList: state.ProductReducer.products,
        isAdmin: state.AuthReducer.isAdmin
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
            controlledDate: null,
            storeId: this.props.params.id,
            productId: '',
            productName: '',
            manufacturer: '',
            description: '',
            quantity: '',
            date: '',
            price: '',
        }
        this.handleDeleteproduct = this.handleDeleteproduct.bind(this)
        this.handleEditproduct = this.handleEditproduct.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.handleAddProduct = this.handleAddProduct.bind(this)
        this.handleSaleProduct = this.handleSaleProduct.bind(this)
        this.handleSalesReport = this.handleSalesReport.bind(this)


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
        this.context.router.push(`/store/${storeId}/addProduct`)
    }
    handleSaleProduct() {
        let storeId = this.props.params.id;
        console.log(storeId)
        this.context.router.push(`/store/${storeId}/saleProduct`)
    }
    handleSalesReport() {
        let storeId = this.props.params.id;
        console.log(storeId)
        this.context.router.push(`/store/${storeId}/saleReport`)
    }

    handleDeleteproduct() {
        let productId = this.state.productId;
        let storeId = this.props.params.id;
        this.props.deleteProduct(productId, storeId);
        this.handleCloseDialog();

    }
    Editproduct(product) {
        this.setState({
            openDialog: true,
            productId: product._id,
            productName: product.productName,
            manufacturer: product.manufacturer,
            description: product.description,
            quantity: product.quantity,
            date: product.date,
            price: product.price,
        })
    }


    handleEditproduct(e) {

        e.preventDefault();
        let product = {
            productName: this.state.productName,
            manufacturer: this.state.manufacturer,
            description: this.state.description,
            quantity: this.state.quantity,
            date: this.state.date,
            price: this.state.price,
        }

        let productId = this.state.productId;
        let storeId = this.props.params.id
        this.props.editProduct(productId, product, storeId)
        this.handleCloseDialog();
    }

    handleCloseDialog() {
        this.setState({ openDialog: false })
    }
    handleDateChange = (event, date) => {
        this.setState({
            date: date,
        })
    }
    render() {
        return (
            <div className='container'>

                {/*<Tabs>
                    <Tab
                        icon={<MapsPersonPin />}
                        label="ADD PRODUCTS"
                       
                    />
                    <Tab
                        icon={<MapsPersonPin />}
                        label="SALE PRODUCT"
                    />
                    <Tab
                        icon={<MapsPersonPin />}
                        label="SALES REPORT"
                    />
                </Tabs>*/}
                {(this.props.isAdmin)
                    ?
                    <div className='group-btn'>
                        <RaisedButton
                            onTouchTap={this.handleAddProduct}
                            className='btn'
                            style={{ marginBottom: 20 }}
                            label="Add Products"
                            primary={true} />
                        <RaisedButton
                            className='btn'
                            onTouchTap={this.handleSaleProduct}
                            style={{ marginBottom: 20 }}
                            label="Sale Product"
                            primary={true} />
                        <RaisedButton
                            className='btn'
                            onTouchTap={this.handleSalesReport}
                            style={{ marginBottom: 20 }}
                            label="Sales Report"
                            primary={true} />
                    </div>
                    : null
                }



                <AppBar title="AVAILIABLE Product" showMenuIconButton={false} />
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
                            defaultValue={this.state.productName}
                            floatingLabelText="Product Name"
                            hintText="Product Name"
                            onChange={(ev) => this.setState({ storeName: ev.target.value })}
                            fullWidth={true}
                            required
                        />

                        <TextField
                            defaultValue={this.state.manufacturer}
                            floatingLabelText="Manufacturer"
                            hintText="Manufacturer"
                            onChange={(ev) => this.setState({ manufacturer: ev.target.value })}
                            fullWidth={true}
                            required
                        />

                        <TextField
                            defaultValue={this.state.description}
                            floatingLabelText="Description"
                            hintText="Description"
                            onChange={(ev) => this.setState({ description: ev.target.value })}
                            fullWidth={true}
                            required
                        />
                        <TextField
                            defaultValue={this.state.quantity}
                            floatingLabelText="Quantity"
                            hintText="Quantity"
                            onChange={(ev) => this.setState({ quantity: ev.target.value })}
                            type="number"
                            fullWidth={true}
                            required
                        />
                        <DatePicker
                            value={this.state.date}
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
                            value={this.state.price}
                            type="number"
                            floatingLabelText="Price"
                            hintText="Price"
                            onChange={(ev) => this.setState({ price: ev.target.value })}
                            fullWidth={true}
                            required
                        />

                        <div style={{ textAlign: 'center' }}>
                            <RaisedButton
                                className='btn'
                                onTouchTap={this.handleCloseDialog}
                                label="Cancel"
                                primary={true} />
                            <RaisedButton
                                className='btn'
                                secondary={true}
                                label="Delete"
                                onTouchTap={this.handleDeleteproduct} />
                            <RaisedButton
                                onTouchTap={this.handleEditproduct}
                                className='btn'
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
