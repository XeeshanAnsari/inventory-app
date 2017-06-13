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

    static getProduct() {
        return (dispatch) => {
            axios.get(`${rooturl}/api/store`)
                .then((response) => {
                    if (response.status === 200) {
                        let stores = [];
                        let data = response.data;
                        for(var store in data){
                            stores.push(data[store])
                        }
                        console.log(response.data)
                        dispatch(productActions.getProducts(stores))
                    }
                })
                .catch(err => dispatch(productActions.getproductsWithRejected(err)))
        }

    }
     static deleteProduct(storeId) {
        return (dispatch) => {
            axios.delete(`${rooturl}/api/store/${storeId}`)
                .then((response) => {
                    if (response.status === 204) {
                        dispatch(productActions.deleteProduct())
                        dispatch(ProductMiddleware.getProduct())

                    }
                })
                .catch(err => dispatch(productActions.deleteProductWithRejected(err)))
        }

    }
    static editProduct(storeId , store) {
        return (dispatch) => {
            axios.put(`${rooturl}/api/store/${storeId}`, store)
                .then((response) => {
                 
                        dispatch(productActions.editProduct(response.data))
                        dispatch(ProductMiddleware.getProduct())

                    
                })
                .catch(err => dispatch(productActions.editProductWithRejected(err)))
        }

    }
}