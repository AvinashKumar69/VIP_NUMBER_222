import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './screens/ContactUs';
import Home from './screens/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contactus' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
