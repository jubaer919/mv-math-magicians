import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';
import Home from './components/Home';
import classes from './App.module.css';

function App() {
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quot" element={<QuoteDisplay />} />
      </Routes>
    </>
  );
}

export default App;
