import { createContext, useReducer, useEffect } from 'react';
import { URL } from '../configs/API';
import taskListReducer from '../reducers/TaskListReducer'

export const TaskContext = createContext();

export const TaskListContext = (props) => {

    const initialState = {
        tasks: [],
        filterOption: "All"
    };

    const [state, dispatch] = useReducer(taskListReducer, initialState);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (res) => {
                    dispatch({
                        type: 'INITIALIZE',
                        payload: res
                    })
                },
                (err) => {
                    console.log(err);
                }
            )
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            filterOption: state.filterOption,
            dispatch: dispatch
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}