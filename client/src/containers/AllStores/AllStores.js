import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import StoreMiddleware from './../../store/middleware/store_middleware'
import { connect } from 'react-redux';
import './AllStores.css'


const mapStateToProps = (state) => {
    return {
        storeList: state.StoreReducer.stores
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStores: () => dispatch(StoreMiddleware.getStores()),
        deleteStore: (id) => dispatch(StoreMiddleware.deleteStore(id)),
        editStore: (id, store) => dispatch(StoreMiddleware.editStore(id, store))
    }
};


class AllStores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDialog: false
        }
        this.handleDeleteStore = this.handleDeleteStore.bind(this)
        this.handleEditStore = this.handleEditStore.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.handleOpenStore = this.handleOpenStore.bind(this)

    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount() {
        this.props.getStores();
    }


    handleOpenStore(store) {
        this.context.router.push(`/store/${store._id}`)

    }
    handleDeleteStore() {
        let id = this.state.storeId;
        this.props.deleteStore(id);

    }
    EditStore(store) {
        this.setState({
            openDialog: true,
            storeId: store._id
        })
    }
    handleCloseDialog() {
        this.setState({ openDialog: false })
    }

    handleEditStore(e) {
        e.preventDefault();
        let store = {
            storeName: this.refs.storeName.getValue(),
            location: this.refs.location.getValue()
        }
        let id = this.state.storeId;
        this.props.editStore(id, store)
        //     .then(() => this.setState({ openDialog: false }))
    }
    render() {
        return (
            <div className='container'>
                <AppBar title="AVAILIABLE STORES" showMenuIconButton={false}/>
                <Table className="Table">
                    <TableHeader displayRowCheckbox={false} >
                        <TableRow  >
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn >Store Name</TableHeaderColumn>
                            <TableHeaderColumn>Location</TableHeaderColumn>
                            <TableHeaderColumn>Open</TableHeaderColumn>


                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.props.storeList.map((store, i) => {
                                return (
                                    <TableRow key={store._id} >
                                        <TableRowColumn >{i + 1}</TableRowColumn>
                                        <TableRowColumn >{store.storeName}</TableRowColumn>
                                        <TableRowColumn >{store.location}</TableRowColumn>
                                        <TableRowColumn >
                                            <RaisedButton
                                                onTouchTap={() => this.handleOpenStore(store)}
                                                label="Open"
                                                primary={true} />
                                        </TableRowColumn>
                                    </TableRow>
                                )

                            })
                        }

                    </TableBody>
                </Table>

                <Dialog
                    title="Edit Store"
                    style={{ textAlign: 'center' }}
                    modal={false}
                    open={this.state.openDialog}
                    onRequestClose={this.handleCloseDialog}
                    autoScrollBodyContent={true}
                >
                    <form  >
                        <TextField
                            ref="storeName"
                            floatingLabelText="Store Name"
                            hintText="Store Name"
                            fullWidth={true}
                            required
                        />

                        <TextField
                            ref="location"
                            type='Location'
                            floatingLabelText="Location"
                            hintText="Location"
                            fullWidth={true}
                            required
                        />

                        <div style={{ textAlign: 'center' }}>
                            <RaisedButton
                                className='dialog-btn'
                                onTouchTap={this.handleCloseDialog}
                                label="cancel"
                                primary={true} />
                            <RaisedButton
                                className='dialog-btn'
                                secondary={true}
                                label="Delete"
                                onTouchTap={this.handleDeleteStore} />
                            <RaisedButton
                                onTouchTap={this.handleEditStore}
                                className='dialog-btn'
                                label="save"
                                primary={true} />
                        </div>
                    </form>
                </Dialog>
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AllStores);
