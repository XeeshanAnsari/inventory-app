

export default class saleProductActions {
    static CREATE_SALE_PRODUCT = "CREATE_SALE_PRODUCT";
    static CREATE_SALE_PRODUCT_REJECTED = "CREATE_SALE_PRODUCT_REJECTED";
    static GET_SALES = "GET_SALES";
    static GET_SALES_REJECTED = "GET_SALES_REJECTED";

    static addSaleProduct(product) {
        return {
            type: saleProductActions.CREATE_SALE_PRODUCT,
            product
        }

    }
    static addSaleProductWithRejected(error) {
        return {
            type: saleProductActions.CREATE_SALE_PRODUCT_REJECTED,
            error
        }
    }

   static getSales(sales){
       return{
           type:saleProductActions.GET_SALES,
           sales
       }
   }
   static getSalesWithRejected(error){
       return{
           type:saleProductActions.GET_SALES_REJECTED,
           error
       }
   }

}