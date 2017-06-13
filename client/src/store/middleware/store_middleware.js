import axios from 'axios';
import { browserHistory } from 'react-router';
import storeActions from '../actions/store_action'
const rooturl = "http://localhost:3090";

export default class StoreMiddleware {
    static createStore(store) {
        return (dispatch) => {
            axios.post(`${rooturl}/api/store`, store)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(storeActions.creareStore(response.data))
                    }
                })
                .catch(err => dispatch(storeActions.creareStoreWithRejected(err)))
        }

    }

    static getStores() {
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
                        dispatch(storeActions.getStores(stores))
                    }
                })
                .catch(err => dispatch(storeActions.getStoresWithRejected(err)))
        }

    }
}