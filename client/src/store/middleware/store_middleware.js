import axios from 'axios';
import { browserHistory } from 'react-router';
import storeActions from '../actions/store_action'
import {rooturl} from '../../store/configUrl';

export default class StoreMiddleware {
    static createStore(store) {
        
        return (dispatch) => {
            console.log(store)
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
     static deleteStore(storeId) {
        return (dispatch) => {
            axios.delete(`${rooturl}/api/store/${storeId}`)
                .then((response) => {
                    if (response.status === 204) {
                        dispatch(storeActions.deleteStore())
                        dispatch(StoreMiddleware.getStores())

                    }
                })
                .catch(err => dispatch(storeActions.deleteStoreWithRejected(err)))
        }

    }
    static editStore(storeId , store) {
        return (dispatch) => {
            axios.put(`${rooturl}/api/store/${storeId}`, store)
                .then((response) => {
                 
                        dispatch(storeActions.editStore(response.data))
                        dispatch(StoreMiddleware.getStores())

                    
                })
                .catch(err => dispatch(storeActions.editStoreWithRejected(err)))
        }

    }
}