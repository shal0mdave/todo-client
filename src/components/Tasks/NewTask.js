import { useState, useContext } from "react";
import { TaskContext } from "../../contexts/TaskListContext";

const NewTask = () => {
    const [title, setTitle] = useState("");

    const { tasks, dispatch } = useContext(TaskContext);

    const _handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            const maxId = tasks.reduce((previous, current) => (previous.id > current.id) ? previous.id : current.id, 0);
            dispatch({
                type: 'CREATE_TASK',
                payload: {
                    id: maxId + 1,
                    title: title,
                    done: false
                }
            });
            setTitle("");
        }
    }

    return <input type="text" placeholder="Add your todo..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={_handleEnterKeyPress} />
}

export default NewTask;