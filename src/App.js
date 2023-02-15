
import './App.css';
import TasksList from './Components/TasksList';

function App() {
  const tasks=[{name:"Work-out",description:"GYM at 5 pm ",done:false},{name:"Lunch ",description:"Lunch with MOM ",done:true},{name:"Meeting",description:"Urgent Meeting with Paul at 2 pm ",done:false},{name:"Grosseries",description:"Buy Next week grosseries",done:false}]
  return (
    <div className="App">
    {tasks.map(el=> <TasksList x={el}/>)}
    </div>
  );
}

export default App;
