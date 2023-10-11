import { Link } from 'react-router-dom';
import Header from './header/Header';

function Completed() {
    return(
        <div>
          <Link to='/completed'></Link>

          <Header />

          Completed
        </div>
    )
}

export default Completed;