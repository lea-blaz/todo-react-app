import { Link } from 'react-router-dom';
import Header from '../header/Header';
import './all.css';

function All(props) {
    return(
        <div>
          <Link to='/'></Link>
          
          <Header />

          <div className='list-container'>
            <input type='text' placeholder='Add item to the list...' onChange={props.handleChange}></input>
            <button type='button' onClick={props.handleClick}>Add Item</button>

            <div className='list-item'>
              {props.item}
            </div>
            
          </div>
          
        </div>
    )
}

export default All;