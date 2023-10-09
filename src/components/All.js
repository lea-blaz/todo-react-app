import { Link } from 'react-router-dom';

function All(props) {
    return(
        <div>
          <Link to='/'></Link>
          <input type='text' placeholder='Add item to the list...' onChange={props.handleChange}></input>
          <button type='button' onClick={props.handleClick}>ADD ITEM</button>
          <div className='item-container'>
          <p>{props.item}</p>
          </div>
        </div>
    )
}

export default All;