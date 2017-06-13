

export default class storeActions {

    static CREATE_STORE = "CREATE_STORE";
    static CREATE_STORE_REJECTED = "CREATE_STORE_REJECTED";
    static GET_STORES = "GET_STORES";
    static GETS_STORES_REJECTED = "GET_STORES_REJECTED";

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
}