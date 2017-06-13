import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import   StoreMiddleware from './../../store/middleware/store_middleware'
import { connect } from 'react-redux';
import './AddStore.css'


const mapStateToProps = (state) => {
    return {

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
           AddStore:(store) => dispatch(StoreMiddleware.createStore(store))
    }
};


class AddStore extends Component {
    constructor(props) {
        super(props);
        this.handleAddStore = this.handleAddStore.bind(this);
    }
    handleAddStore(e) {
        e.preventDefault();
        let store = {
            storeName: this.refs.storeName.getValue(),
            location: this.refs.location.getValue()
        }
        
        this.props.AddStore(store);
         this.refs.storeName.value = " ";
         this.refs.location.value = " ";
    }
    render() {
        return (
            <div className='container'>
                <Paper className="paper" >
                    <h1>Add Store</h1>
                    <form onSubmit={this.handleAddStore}>
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


                        <RaisedButton
                            type="submit"
                            label="Add Store"
                            className="btn"
                            primary={true}
                        />


                    </form>
                </Paper >
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddStore);
