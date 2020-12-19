import './App.css';
import { Switch, Route } from 'react-router-dom';
import List from './pages/List'
import CitizenDetail from './pages/CitizenDetail';


function App() {
  return (
    <div className="App">
      <Switch> 
      <Route exact path="/" component={List} />
      <Route exact path="/citizens/:id" component={CitizenDetail}/>
      </Switch>
    </div>
  );
}

export default App;
