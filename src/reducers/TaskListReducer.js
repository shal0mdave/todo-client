import { PostTaskData, DeleteTaskData, UpdateTaskData } from '../services/TaskListService'

const TaskListReducer = (state, action) => {

    switch (action.type) {
        case 'INITIALIZE':
            return {
                ...state,
                tasks: action.payload
            };

        case 'CREATE_TASK':
            PostTaskData(action.payload);
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        case 'UPDATE_TASK':

            UpdateTaskData(action.payload);
            const updatedTask = action.payload;

            const updatedTasks = state.tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            })
            return {
                ...state,
                tasks: updatedTasks
            };

        case 'DELETE_TASK':
            DeleteTaskData(action.payload);
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };

        case 'FILTER':
            return {
                ...state,
                filterOption: action.payload
            };

        default:
            return state;
    }
}

export default TaskListReducer;