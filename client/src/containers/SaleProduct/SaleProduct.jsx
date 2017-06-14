import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import saleProductMiddleware from './../../store/middleware/sale_product_middleware'
import { connect } from 'react-redux';
import './SaleProduct.css'


const mapStateToProps = (state) => {
    return {
        productList: state.ProductReducer.products
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSaleProduct: (product) => dispatch(saleProductMiddleware.addSaleProduct(product))
    }
};


class SaleProduct extends Component {

    static contextTypes = {
        router: React.PropTypes.object
    }
    constructor(props) {
        super(props);
        this.state = {
            controlledDate: null,
            productName: "",
            unitPrice: "",
            totalPrice: "",
            errorText: ""
        }
        this.handleSaleProduct = this.handleSaleProduct.bind(this)
        // this.handleTotalPrice = this.handleTotalPrice.bind(this)
        this.handleCheckQuantity = this.handleCheckQuantity.bind(this)

    }

    handleDateChange(e, date) {
        this.setState({ controlledDate: date })
    }
    handleSaleProduct(e) {
        e.preventDefault();

        let saleProduct = {
            storeId: this.props.params.id,
            productName: this.state.productName,
            quantity: this.refs.quantity.getValue(),
            date: this.state.controlledDate,
            unitPrice: this.state.unitPrice,
            totalPrice: this.refs.totalPrice.getValue(),

        }
        console.log(saleProduct)
        this.props.addSaleProduct(saleProduct);
        // let storeId = this.props.params.id
        // this.context.router.push(`/store/${storeId}/allProducts`)
    }
    handleProductName(ev, index, value) {
        console.log(value)
        this.setState({ productName: value })
        setTimeout(() => {
            this.props.productList.filter((product => {
                if (product.productName === this.state.productName) {

                    this.setState({
                        unitPrice: product.price
                    })
                }
            }))
        }, 1000)
        // this.props.productList.filter((product => {
        //     if (product.productName === this.state.productName) {

        //         this.setState(() => {
        //               return {
        //                 unitPrice: product.productName
        //               } 
        //         })
        //     }
        // }))
    }
    handleCheckQuantity() {
        this.props.productList.filter((product => {
            if (product.productName === this.state.productName) {
                let quantity = this.refs.quantity.getValue()
                if (product.quantity > quantity) {
                    let unitPrice = this.state.unitPrice;
                    let totalPrice = quantity * unitPrice;
                    this.setState({ totalPrice: totalPrice })
                }
                else {
                    this.setState({errorText:'NOT AVAILIABE'})
                }
            }
        }))
    }
    // handleTotalPrice() {
    //     let quantity = this.refs.quantity.getValue()
    //     let unitPrice = this.state.unitPrice;
    //     let totalPrice = quantity * unitPrice;
    //     this.setState({ totalPrice: totalPrice })
    // }

    render() {
        return (
            <div className='container'>
                <Paper className="paper" >
                    <h1>Sale Product</h1>
                    <form onSubmit={this.handleSaleProduct}>
                        <SelectField
                            ref='productName'
                            fullWidth={true}
                            floatingLabelText="Product Name"
                            value={this.state.productName}
                            onChange={this.handleProductName.bind(this)}
                        >
                            {
                                this.props.productList.map((product, i) => {
                                    return (
                                        <MenuItem value={product.productName} key={i} primaryText={product.productName} />
                                    )
                                })
                            }
                        </SelectField>

                        {/*<TextField
                            ref="productName"
                            floatingLabelText="Product Name"
                            hintText="Product Name"
                            fullWidth={true}
                            required
                        />*/}
                        <TextField
                            ref="quantity"
                            floatingLabelText="Enter Quantity"
                            hintText="Enter Quantity"
                            onChange={this.handleCheckQuantity}
                            errorText={this.state.errorText}
                            type="number"
                            fullWidth={true}
                            required
                        />
                        <DatePicker
                            value={this.state.controlledDate}
                            onChange={this.handleDateChange.bind(this)}
                            floatingLabelText="Sale Date"
                            hintText="Sale Date"
                            fullWidth={true}
                            required
                        />

                        <TextField
                            ref="unitPrice"
                            disabled={true}
                            type="number"
                            value={this.state.unitPrice}
                            floatingLabelText="Unit Price"
                            hintText="Unit Price"
                            fullWidth={true}
                            required
                        />

                        <TextField
                            ref="totalPrice"
                            type="number"
                            disabled={true}
                            value={this.state.totalPrice}
                            floatingLabelText="Total Price"
                            hintText="Total Price"
                            fullWidth={true}
                            required
                        />

                        <RaisedButton
                            type="submit"
                            label="Sale Product"
                            className="btn"
                            primary={true}
                        />


                    </form>
                </Paper >
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SaleProduct);
