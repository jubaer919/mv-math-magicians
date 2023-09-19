import { Link } from 'react-router-dom';
import classes from '../App.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={classes['nav-bar']}>
        <h1>Math Magician</h1>
        <ul className={classes['nav-list']}>
          <li className={classes['nav-link']}><Link to="/">Home</Link></li>
          <li className={classes['nav-link']}><Link to="/calculator">Calculator</Link></li>
          <li className={classes['nav-link']}><Link to="/quot">Quote</Link></li>
        </ul>
      </nav>
    </>
  );
}
