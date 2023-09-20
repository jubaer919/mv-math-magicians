import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quot" element={<QuoteDisplay />} />
      </Routes>
    </>
  );
}

export default App;
