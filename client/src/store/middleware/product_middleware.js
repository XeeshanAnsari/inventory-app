import axios from 'axios';
import { browserHistory } from 'react-router';
import productActions from '../actions/product_action'
const rooturl = "http://localhost:3090";

export default class ProductMiddleware {


    static addProduct(product) {
        return (dispatch) => {
            axios.post(`${rooturl}/api/product`, product)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(productActions.addProduct(response.data))
                    }
                })
                .catch(err => dispatch(productActions.addProductWithRejected(err)))
        }

    }

    static getProducts(id) {
        return (dispatch) => {
            console.log('sfsdf')
            axios.get(`${rooturl}/api/product/${id}`)
                .then((response) => {
                    if (response.status === 200) {
                        let products = [];
                        let data = response.data;
                        console.log(response.data)
                        for (var product in data) {
                            products.push(data[product])
                        }
                        console.log(response.data)
                        dispatch(productActions.getProducts(products))
                    }
                })
                .catch(err => dispatch(productActions.getproductsWithRejected(err)))
        }

    }
    static deleteProduct(productId, storeId) {
        return (dispatch) => {
            console.log(storeId)
            axios.delete(`${rooturl}/api/product/${productId}`)
                .then((response) => {
                    if (response.status === 204) {
                        dispatch(productActions.deleteProduct())
                        dispatch(ProductMiddleware.getProducts(storeId))

                    }
                })
                .catch(err => dispatch(productActions.deleteProductWithRejected(err)))
        }

    }
    static editProduct(productId, product, storeId) {
        return (dispatch) => {
            console.log(storeId)
            axios.put(`${rooturl}/api/product/${productId}`, product)
                .then((response) => {

                    dispatch(productActions.editProduct(response.data))
                    dispatch(ProductMiddleware.getProducts(storeId))


                })
                .catch(err => dispatch(productActions.editProductWithRejected(err)))
        }

    }
}