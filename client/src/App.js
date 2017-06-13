import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, SignUp, SignIn  , AddStore , AllStores} from './containers'


class App extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={Home}>
                        <Route path="/signup" component={SignUp} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/addStore" component={AddStore} />
                        <Route path="/AllStores" component={AllStores} />
                        
                    </Route>
                </Router>
            </div>
        )
    }
}

export default App