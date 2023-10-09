import { Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom'; 
import Active from './components/Active';
import All from './components/Active';
import Completed from './components/Completed';

function App() {

  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="App">
      <Router>
      <header>
        <h1>My TO-DO App</h1>
        <nav>
          <ul>
          
            <li><Link to='/'>ALL</Link></li>
            <li><Link to='/active'>ACTIVE</Link></li>
            <li><Link to='/completed'>COMPLETED</Link></li>
            
          </ul>
        </nav>
      </header>

      
        <Routes>
          <Route exact path='/' Component = {All}/>
          <Route exact path='/active' Component = {Active}/>
          <Route exact path='/completed' Component = {Completed}/>
        </Routes>
      </Router>

      <footer>
        <small> {day}-{month}-{year}</small> <br />
        <small>Author: @LeaBL</small>
      </footer>

      
    </div>
  );
}

export default App;
