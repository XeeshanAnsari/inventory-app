const AdminController = require('../controllers/admin_controller')
const UserController = require('../controllers/user_controller');
const StoreController = require('../controllers/Store_controller');
const ProductController = require('../controllers/product_controller');
const SaleProductController = require('../controllers/sale_product_controller');

const passportService = require('../service/passport')
const passport = require('passport')

const requireAdminSignIn = passport.authenticate('admin-login', { session: false })
const requireUserSignIn = passport.authenticate('user-login', { session: false })

module.exports = (app) => {



  app.post('/api/createAdmin', AdminController.create);
  app.post('/api/signinAdmin',  AdminController.login)

  app.post('/api/createUser', UserController.signUp)
  app.post('/api/userSignIn', UserController.signIn)


  app.post('/api/store', StoreController.createStore)
  app.get('/api/store', StoreController.getStores)
  app.delete('/api/store/:id', StoreController.deleteStore)
  app.put('/api/store/:id', StoreController.editStore)


  app.post('/api/product', ProductController.addProduct)
  app.get('/api/product/:id', ProductController.getProducts)
  app.delete('/api/product/:id', ProductController.deleteProduct)
  app.put('/api/product/:id', ProductController.editProduct)
  app.put('/api/product/update/:id', ProductController.UpdateProductQuantity)


  app.post('/api/saleProduct', SaleProductController.addSaleProduct)
  app.get('/api/saleProduct/:id', SaleProductController.getSales)

}