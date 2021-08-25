import { Card, ProgressReport, Filter, TaskList } from './components'
import { TaskListContext } from './contexts/TaskListContext'
import './styles/app.scss'

function App() {
  return (
    <TaskListContext>
      <div className="App">
        <section>
          <div className="container">
            <Card>
              <ProgressReport />
              <Filter />
              <TaskList />
            </Card>
          </div>
        </section>
      </div>
    </TaskListContext>
  );
}

export default App;
