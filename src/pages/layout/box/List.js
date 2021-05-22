import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../actions/taskActions';

// Components
import Task from './list/Task';
import CreateButton from './list/CreateButton';

//import MenuTab from './list/MenuTab';
//<MenuTab />

const mapStateToProps = state => {
    return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers())
    }
}

class List extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        const { tasks } = this.props;
        let taskListComponent = '';

        //if (!Object.keys(tasks).length) {

        if (!tasks.length) {
            taskListComponent =
                <Fragment>
                    <div className="box">
                        <h1>There's no User created</h1>
                    </div>
                </Fragment>
        } else {
            taskListComponent =
                <Fragment>
                    {tasks.map(task => (
                     //console.log(task)
                     typeof task.email !== 'undefined'
                     ? (<Task task={task} key={task._id} />)
                     : null

                    ))}
                </Fragment>
        }

        return (
            <div>
                <div className="is-task-list">
                    <Fragment>
                        {taskListComponent}
                    </Fragment>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);