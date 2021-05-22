import React, { Component } from 'react';

import TextInput from '../../../../components/TextInput';
import DoneButton from './task/DoneButton';
import EditButton from './task/EditButton';

class Task extends Component {

    constructor() {
        super();

        this.state = {
            nome: '',
            email: '',
        };
    }

    componentDidMount() {
        //const { task } = this.props.task;
        if (this.props.task.id) {
            console.log(this.props.task.id)
            this.setState(this.props.task);
        }
    }

    render() {
        const { task } = this.props;

        return (
            <div className="box" key={task.id}>
                    <div className="column is-4">
                        <TextInput
                            id={task.id}
                            name={'nome'}
                            value={this.state.nome}
                            className="is-shadowless"
                        />
                    </div>

                    <div className="column is-4">
                        <p>{this.state.email}</p>
                    </div>

                    <div className="column is-3 is-centered" >
                        <EditButton _id={task.id} />
                    </div>
            </div>
        )
    }
}

export default Task;