import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer222 from './components/Footer222';
import Header222 from './components/Header222';
import ContactUs from './screens/ContactUs';
import Home from './screens/Home';

function App() {
  return (
    <>
      <Header222 />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer222 />
    </>
  );
}

export default App;
