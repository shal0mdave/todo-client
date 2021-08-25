import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../contexts/TaskListContext";

const Filter = () => {
    const tags = ["All", "Done", "Undone"];
    const [selectedOption, setSelectedOption] = useState('');
    const { filterOption, dispatch } = useContext(TaskContext);

    const _changeHandler = (tag) => {
        dispatch({
            type: 'FILTER',
            payload: tag
        });
    }

    useEffect(() => {
        setSelectedOption(filterOption)
    }, [filterOption])

    return (
        <div className="toolbar">
            <div className="toolbar-title">
                <h1>Tasks</h1>
            </div>
            <div className="toolbar-filter">
                <details>
                    <summary>{selectedOption}</summary>
                    <ul>
                        {
                            tags.map((tag) => (
                                <li
                                    key={tag}
                                    className={selectedOption === tag ? "selected" : ""}
                                    onClick={() => _changeHandler(tag)}>
                                    {tag}
                                </li>
                            ))
                        }
                    </ul>
                </details>
            </div>
        </div>
    )
}

export default Filter;