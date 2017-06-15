import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import ProductMiddleware from './../../store/middleware/product_middleware'
import { connect } from 'react-redux';
import './AddProduct.css'


const mapStateToProps = (state) => {
    return {
        // storeId: state.StoreReducer.currentStore.store._id
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddProduct: (product) => dispatch(ProductMiddleware.addProduct(product))
    }
};


class AddProduct extends Component {

    static contextTypes = {
        router: React.PropTypes.object
    }
    constructor(props) {
        super(props);
        this.state = {
            controlledDate: null
        }
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    handleAddProduct(e) {
        e.preventDefault();
        console.log(this.props.params.id)
        let product = {
            storeId: this.props.params.id,
            productName: this.refs.productName.getValue(),
            manufacturer: this.refs.manufacturer.getValue(),
            description: this.refs.description.getValue(),
            quantity: this.refs.quantity.getValue(),
            date: this.state.controlledDate,
            price: this.refs.price.getValue(),

        }
        console.log(product)
        this.props.AddProduct(product);
        let storeId = this.props.params.id
        // this.context.router.push(`/store/${storeId}`)

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
                <Paper className="paper" >
                    <h1>Add Product</h1>
                    <form onSubmit={this.handleAddProduct}>
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

                        <RaisedButton
                            type="submit"
                            label="Add Product"
                            className="btn"
                            primary={true}
                        />


                    </form>
                </Paper >
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
