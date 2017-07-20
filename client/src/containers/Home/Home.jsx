import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router'
import './Home.css'


function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
        store: state.AuthReducer.store.user,
        storeId: state.AuthReducer.storeId,
        isAdmin: state.AuthReducer.isAdmin
    }
}



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
                <div className='navigation-div'>
                    {/* <Avatar src="img.jpg" /> */}
                    <b>WelCome</b>
                </div>
                {(this.props.isAuthenticated) ?
                    <div>
                        {(this.props.isAdmin) ?
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
                                <MenuItem
                                    className="navigation-menuItem"
                                    primaryText="Register New User"
                                    containerElement={<Link to="/createUser" />}
                                />
                            </div>
                            :

                            <div>
                                <MenuItem
                                    className="navigation-menuItem"
                                    primaryText="Add Product"
                                    containerElement={<Link to={`/store/${this.props.storeId}/addProduct`} />}
                                />


                                <MenuItem
                                    className="navigation-menuItem"
                                    primaryText="View Product"
                                    containerElement={<Link to={`/store/${this.props.storeId}/viewProduct`} />}
                                />


                                <MenuItem
                                    className="navigation-menuItem"
                                    primaryText="Sale Product"
                                    containerElement={<Link to={`/store/${this.props.storeId}/saleProduct`} />}
                                />

                                <MenuItem
                                    className="navigation-menuItem"
                                    primaryText="Sale Report"
                                    containerElement={<Link to={`/store/${this.props.storeId}/saleReport`} />}
                                />
                            </div>
                        }
                    </div>
                    : null
                }

            </div>
        )
    }
    render() {
        return (
            <div>

                <div>
                    <AppBar
                        title="Inventory App"
                        onLeftIconButtonTouchTap={this.handleDrawerToggle}
                        iconElementRight={<Buttons />}
                    />

                    {(this.props.isAuthenticated)
                        ?
                        <Drawer open={this.state.drawerOpen} docked={false}
                            onRequestChange={this.handleDrawerToggle}>
                            {this.drawerMenu()}
                        </Drawer>
                        : null}
                    {this.props.children}
                </div>


            </div>
        )
    }
}



export default connect(mapStateToProps)(Home);