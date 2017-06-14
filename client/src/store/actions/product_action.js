

export default class productActions {

    static CREATE_PRODUCT = "CREATE_PRODUCT";
    static CREATE_PRODUCT_REJECTED = "CREATE_PRODUCT_REJECTED";

    static GET_PRODUCTS = "GET_PRODUCTS";
    static GETS_PRODUCTS_REJECTED = "GET_PRODUCTS_REJECTED";

    static DELETE_PRODUCT = "DELETE_PRODUCT";
    static DELETE_PRODUCT_REJECTED = "DELETE_PRODUCT_REJECTED";

    static EDIT_PRODUCT = "EDIT_PRODUCT";
    static EDIT_PRODUCT_REJECTED = "EDIT_PRODUCT_REJECTED";


    static addProduct(product) {
        return {
            type: productActions.CREATE_PRODUCT,
            product
        }

    }
    static addProductWithRejected(error) {
        return {
            type: productActions.CREATE_PRODUCT_REJECTED,
            error
        }
    }





    static getProducts(product) {
        return {
            type: productActions.GET_PRODUCTS,
            product
        }
    }
    static getproductsWithRejected(error) {
        return {
            type: productActions.GET_PRODUCTS_REJECTED,
            error
        }
    }

    // for delete PRODU
    static deleteProduct() {
        return {
            type: productActions.DELETE_PRODUCT
        }
    }
    static deleteProductWithRejected(error) {
        return {
            type: productActions.DELETE_PRODUCT_REJECTED,
            error
        }
    }
    // for edit PRODUCT 
    static editProduct(product) {
        return {
            type: productActions.EDIT_PRODUCT,
            product
        }
    }
    static editProductWithRejected(error) {
        return {
            type: productActions.EDIT_PRODUCT_REJECTED,
            error
        }
    }

}