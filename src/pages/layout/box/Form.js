import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../../../actions/taskActions';
//import uuidv1 from 'uuid';
import { v4 as uuidv4 } from 'uuid';

// Components
import Inputs from './form/Inputs';
import Buttons from './form/Buttons';

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
};

class Form extends Component {

    constructor() {
        super();

        this.state = {
            _id: '',
            nome: '',
            email: '',
            senha: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.state._id = uuidv4();

        this.props.createTask(this.state);
        
        this.setState({
            _id: '',
            nome: '',
            email: '',
            senha: '',
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <h1 className="title has-text-grey-dark">
                    Create User
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <Inputs state={this.state} onChange={this.handleChange} />
                    <Buttons />
                </form>
            </Fragment>
        );
    }
}

export default Form;