import { useEffect, useState, useContext } from "react"
import { TaskContext } from "../../contexts/TaskListContext";


const ProgressReport = () => {

    const [progress, setProgress] = useState({
        completed: null,
        percentage: null
    });
    const { tasks } = useContext(TaskContext);

    useEffect(() => {

        const completedNum = tasks.reduce((count = 0, task) => count + (task.done ? 1 : 0), 0);
        const percentageNum = ((completedNum / tasks.length) * 100).toFixed(3);

        setProgress({
            completed: completedNum,
            percentage: percentageNum
        });
    }, [tasks]);

    return (
        <div className="progress-report">
            <h1>Progress</h1>
            <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: `${progress.percentage > 0 ? progress.percentage : 0}%` }}></div>
            </div>
            <p>{progress.completed} completed</p>
        </div>
    )
}

export default ProgressReport