import { Fragment, useEffect, useState, useContext } from "react";
import { TaskContext } from "../../contexts/TaskListContext";

const Task = (props) => {
    const [edit, setEdit] = useState(false);
    const [options, setOptions] = useState(false);
    const [task, setTask] = useState({
        id: null,
        title: "",
        done: false
    });

    const { tasks, dispatch } = useContext(TaskContext);

    useEffect(() => {
        const taskId = props.id;
        const selectedTask = tasks.find((task) => task.id === parseInt(taskId));
        setTask(selectedTask);
    }, [props.id, tasks]);

    const _editHandler = (key, newValue) => {
        setTask({ ...task, [key]: newValue });
    }

    const _doneHandler = () => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: { ...task, done: !task.done }
        });
        _editHandler("done", !task.done);
    }

    const _updateHandler = () => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: task
        });
        setOptions(!options);
        setEdit(!edit);
    }

    const _deleteHandler = () => {
        dispatch({
            type: 'DELETE_TASK',
            payload: task.id
        });
        setOptions(!options);
    }

    if (edit) {
        return (
            <Fragment>
                <input type="text"
                    value={task.title}
                    required="required"
                    onChange={e => _editHandler('title', e.target.value)} />
                <button className="save-btn" onClick={_updateHandler}>Save</button>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <label htmlFor={task.id} className={task.done ? "done" : ""}>
                    <input type="checkbox"
                        id={task.id}
                        checked={task.done}
                        onChange={_doneHandler} />
                    {task.title}
                </label>
                <button className="options-btn" onClick={() => setOptions(!options)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={options ? 'options' : 'hidden'}>
                    <ul>
                        <li onClick={() => setEdit(!edit)}>Edit</li>
                        <li onClick={_deleteHandler} className="delete">Delete</li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Task;