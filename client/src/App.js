import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, SignUp, SignIn, AddStore, AllStores, AddProduct, AllProducts, SaleProduct, AllSales } from './containers'


class App extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={Home}>
                        <Route path="/signup" component={SignUp} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/addStore" component={AddStore} />
                        <Route path="/allStores" component={AllStores} />
                        <Route path="/store/:id" component={AllProducts} />
                        <Route path="/store/:id/addProduct" component={AddProduct} />
                        <Route path="/store/:id/saleProduct" component={SaleProduct} />
                        <Route path="/store/:id/saleReport" component={AllSales} />

                    </Route>
                </Router>
            </div>
        )
    }
}

export default App