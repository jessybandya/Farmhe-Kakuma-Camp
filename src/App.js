import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBox from './components/Floating-Button';
import Nopage from './pages/No-page';

function App() {
  return (
    <>
   <Header />
   <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="*" element={<Nopage />} />
   </Routes>
   <ChatBox />
   <Footer />
   </>
  );
}

export default App;
