import { ADD_TASK, GET_TASKS } from '../actions/actionTypes';

const initialState = {
    tasks: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TASK) {
        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
    }

    if (action.type === GET_TASKS) {
        let tsarray = (Object.values(action.payload.tasks));
        return {
            ...state,
            tasks: tsarray
        }
    }

    return state;
};

export default rootReducer;