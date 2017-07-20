import axios from 'axios'
import { browserHistory } from 'react-router';
import saleProductActions from '../actions/sale_product_action'
import {rooturl} from '../../store/configUrl';



export default class SaleProductMiddleware {


    static addSaleProduct(product) {
        return (dispatch) => {
            axios.post(`${rooturl}/api/saleProduct`, product)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(saleProductActions.addSaleProduct(response.data))
                    }
                })
                .catch(err => dispatch(saleProductActions.addSaleProductWithRejected(err)))
        }

    }

    //for get all sales
    static getSales(id) {
        return (dispatch) => {

            axios.get(`${rooturl}/api/saleProduct/${id}`)
                .then((response) => {
                    if (response.status === 200) {
                        let sales = [];
                        let data = response.data;
                        console.log(response.data)
                        for (var sale in data) {
                           sales.push(data[sale])
                        }
                        console.log(sales)
                        dispatch(saleProductActions.getSales(sales))
                    }
                })
                .catch(err => dispatch(saleProductActions.getSalesWithRejected(err)))
        }
    }
}