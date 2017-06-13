

export default class storeActions {

    static CREATE_STORE = "CREATE_STORE";
    static CREATE_STORE_REJECTED = "CREATE_STORE_REJECTED";

    static GET_STORES = "GET_STORES";
    static GETS_STORES_REJECTED = "GET_STORES_REJECTED";

    static DELETE_STORE = "DELETE_STORE";
    static DELETE_STORE_REJECTED = "DELETE_STORE_REJECTED";

    static EDIT_STORE = "EDIT_STORE";
    static EDIT_STORE_REJECTED = "EDIT_STORE_REJECTED";

    
    static creareStore(store) {
        return {
            type: storeActions.CREATE_STORE,
            store
        }

    }
    static creareStoreWithRejected(error) {
        return {
            type: storeActions.CREATE_STORE_REJECTED,
            error
        }
        
    }


    static getStores(store) {
        return {
            type: storeActions.GET_STORES,
            store
        }
    }
    static getStoresWithRejected(error) {
        return {
            type: storeActions.GET_STORES_REJECTED,
            error
        }
    }

// for delete store
    static deleteStore() {
        return {
            type: storeActions.DELETE_STORE
        }
    }
    static deleteStoreWithRejected(error) {
        return {
            type: storeActions.DELETE_STORE_REJECTED,
            error
        }
    }
   // for edit store 
    static editStore() {
        return {
            type: storeActions.EDIT_STORE,
            
        }
    }
    static editStoreWithRejected(error) {
        return {
            type: storeActions.EDIT_STORE_REJECTED,
            error
        }
    }
}