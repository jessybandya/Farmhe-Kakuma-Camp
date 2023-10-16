import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBox from './components/Floating-Button';
import Nopage from './pages/No-page';
import Programs from './pages/Programs';
import Team from './pages/Team';
import Blogs from './pages/Blogs';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
   <Header />
   <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/our-programs" element={<Programs />} />
   <Route exact path="/shopping" element={<Shop />} />
   <Route exact path="/our-team" element={<Team />} />
   <Route exact path="/our-blogs" element={<Blogs />} />
   <Route exact path="/about-us" element={<About />} />
   <Route exact path="/contact-us" element={<Contact />} />
   <Route exact path="/register" element={<Register />} />
   <Route exact path="/login" element={<Login />} />
   <Route exact path="*" element={<Nopage />} />
   </Routes>
   <ChatBox />
   <Footer />
   </>
  );
}

export default App;
