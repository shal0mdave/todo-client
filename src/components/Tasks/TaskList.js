import { useContext, useEffect, Fragment, useState } from 'react';
import { TaskContext } from "../../contexts/TaskListContext";
import Task from './Task';
import NewTask from './NewTask';

const Tasks = () => {
    const { filterOption, tasks } = useContext(TaskContext);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        switch (filterOption) {
            case 'All':
                setTaskList(tasks);
                break;
            case 'Done':
                setTaskList(tasks.filter((task) => task.done === true));
                break;
            case 'Undone':
                setTaskList(tasks.filter((task) => task.done === false));
                break;
            default:
                setTaskList(tasks);
        }
    }, [filterOption, tasks]);

    return (
        <div className="tasks">
            <ul>
                {tasks.length > 0 ? (
                    <Fragment>
                        {
                            taskList.map((task) => (
                                <li key={task.id}>
                                    <Task
                                        id={task.id}
                                    />
                                </li>
                            ))
                        }
                    </Fragment>
                ) : (
                    <li className="no-task">
                        You have no tasks
                    </li>
                )}
                <li className="new">
                    <NewTask />
                </li>
            </ul>
        </div>
    )
}

export default Tasks;