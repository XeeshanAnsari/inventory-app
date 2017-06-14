import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router'
import './Home.css'

class Home extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor() {
        super();
        this.state = {
            drawerOpen: false
        }
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this)

    }

    handleDrawerToggle() {
        this.setState({ drawerOpen: !this.state.drawerOpen })
    }

    drawerMenu() {
        return (
            <div>
                <MenuItem
                    className="navigation-menuItem"
                    primaryText="Add Store"
                    containerElement={<Link to="/addStore" />}
                />

                <MenuItem
                    className="navigation-menuItem"
                    primaryText="Availiable Stores"
                    containerElement={<Link to="/allStores" />}
                />

            </div>
        )
    }
    render() {
        return (
            <div>
               
                    <div>
                        <AppBar
                            title="App"
                            onLeftIconButtonTouchTap={this.handleDrawerToggle}
                            iconElementRight={<Buttons />}
                        />

                        <Drawer open={this.state.drawerOpen} docked={false}
                            onRequestChange={this.handleDrawerToggle}>
                            {this.drawerMenu()}
                        </Drawer>
                        {this.props.children}
                    </div>
                

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}



export default connect(mapStateToProps)(Home);