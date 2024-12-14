import  { useContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import ApplyNow from './pages/ApplyNow';
import { ThemeContext } from './contexts/ThemeContext';

export default function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/academic' element={<Academics />} />
        <Route path='/admission' element={<Admissions />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/student' element={<Students />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/apply' element={<ApplyNow />} />
      </Routes>
      <Footer />
    </Router>
  );
}
