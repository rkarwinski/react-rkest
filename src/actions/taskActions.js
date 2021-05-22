import { ADD_TASK, GET_TASKS } from './actionTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/users';

export function addTask(payload) {
    return {
        type: ADD_TASK,
        payload
    }
};

var config = {
    headers: { 
        'Authorization': '$2y$10$tnd/aKi186oMBjv2EkvIVun9a1YtHgEgfqTEua9PfnE/LlnXS37si', 
        'User': '1'
    }
}

export function getAllUsers() {
    return (dispatch) => {
        return axios.get(apiUrl, config)
            .then(res => {
                console.log(res.data)
                dispatch(getAllUsersSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            })
    };
};


export function getAllUsersSuccess(tasks) {
    return {
        type: GET_TASKS,
        payload: {
            tasks
        }
    };
};
