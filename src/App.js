import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'; 
import { useState } from 'react';
import { All, Active, Completed } from './components';
//import { initialList } from './utilities/initialList';
import './App.css';

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
      setItemList(prevList =>  [...prevList,  newItem]);
      setNewItem('');
    }
  function completeItem(item) {
    const newArray = itemList.filter((newItem) => newItem !== item);
    setItemList(newArray);
  }
  

  const itemMap = itemList.map(item => <ul><li>{item} <button onClick={event => completeItem(item)}>-</button></li></ul>);

  return (
    <Router className='app-container'>
      <Routes> 
          <Route  path='/' element = {<All handleClick={addItem} handleChange={handleOnChange} item={itemMap}/>}/>
          <Route  path='/active' element = {<Active />}/>
          <Route  path='/completed' element = {<Completed />}/>
        </Routes>

    

      <footer>
        <small> {day}-{month}-{year}</small> <br />
        <small>Author: @LeaBL</small>
      </footer>

      
    </Router>
  );
}

export default App;
