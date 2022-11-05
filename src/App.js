import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/footer/footer';
import Contact from './components/pages/contact/contact';
import Home from './components/pages/home/home';
// import Home from './components/pages/home/home';

function App() {
  return (
    <div className="bg-white h-screen w-full">
      <Router>
        <Routes>
      {/*  */}
      {/*  */}
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />

          
        </Routes>
        <Footer />
      </Router>
      
      
      
    </div>
  );
}

export default App;
