import { Link } from 'react-router-dom';
import Header from './header/Header';

function Active() {
    return(
        <div>
          <Link to='/'></Link>
          
          <Header />

          Active
        </div>
    )
}

export default Active;