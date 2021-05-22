
import React from 'react';
import { connect } from 'react-redux';

// Components
import Tab from './menuTab/Tab';

const mapStateToProps = state => {
    return { tasks: state.tasks }
};

const MenuTab = ({ tasks }) => {
    const numberOfCompletedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className="tabs is-fullwidth has-text-weight-bold">
            <ul>
                <Tab
                    text="Incomplete"
                    quantity={(tasks.length - numberOfCompletedTasks)}
                    className={'is-active'}
                />

                <Tab
                    text="Completed"
                    quantity={numberOfCompletedTasks}
                    className={''}
                />
            </ul>
        </div>
    );
};

export default connect(mapStateToProps)(MenuTab);