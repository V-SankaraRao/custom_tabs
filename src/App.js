import './App.css';
import Tabs from './Tabs';

function App() {
  const arr=[
    {
      label:"tab 1",
      content:"its an tab 1"
    },{
         label:"tab 2",
      content:"its an tab 2"
    },{
         label:"tab 3",
        content:"its an tab 3"
    }
  ]
  return (
    <div className="App">
      <Tabs Tabs={arr}/>
    </div>
  );
}

export default App;
