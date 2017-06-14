import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, SignUp, SignIn  , AddStore , AllStores , AddProduct , AllProducts} from './containers'


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
                        <Route path="/addProduct/:id" component={AddProduct} />
                        <Route path="/allProducts/:id" component={AllProducts} />
                        
                    </Route>
                </Router>
            </div>
        )
    }
}

export default App