import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, UserSignUp, UserSignIn, AdminSignIn, AddStore, AllStores, AddProduct, AllProducts, SaleProduct, AllSales } from './containers'
import requireAuth from './containers/Authentication/require_authentication'


class App extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={Home}>

                        <Route path="/signin" component={UserSignIn} />
                        <Route path="/createUser" component={UserSignUp} />
                        <Route path="/adminSignin" component={AdminSignIn} />
                        <Route path="/addStore" component={requireAuth(AddStore)} />
                        <Route path="/allStores" component={requireAuth(AllStores)} />
                        <Route path="/store/:id/viewProduct" component={requireAuth(AllProducts)} />
                        <Route path="/store/:id/addProduct" component={requireAuth(AddProduct)} />
                        <Route path="/store/:id/saleProduct" component={requireAuth(SaleProduct)} />
                        <Route path="/store/:id/saleReport" component={requireAuth(AllSales)} />

                    </Route>
                </Router>
            </div>
        )
    }
}

export default App