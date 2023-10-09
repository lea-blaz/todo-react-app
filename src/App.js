import { Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import Active from './components/Active';
import All from './components/All';
import Completed from './components/Completed';

function App() {

  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const [newItem, setNewItem] = useState('');
  const [itemList, setItemList] = useState([]);

  function handleOnChange(event) {
    setNewItem(event.target.value);
  }

  function addItem() {
    setItemList(prevItemList => [...prevItemList, newItem]);
    setNewItem('');
  }

  return (
    <Router>
      <Routes> 
          <Route exact path='/' Component = {All}/>
          <Route exact path='/active' Component = {Active}/>
          <Route exact path='/completed' Component = {Completed}/>
        </Routes>

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

      <main>
        <All handleClick={addItem} handleChange={handleOnChange}/>
      </main>
        
    

      <footer>
        <small> {day}-{month}-{year}</small> <br />
        <small>Author: @LeaBL</small>
      </footer>

      
    </Router>
  );
}

export default App;
