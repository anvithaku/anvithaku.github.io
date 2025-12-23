import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Main/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/menu" element={<Layout><Menu /></Layout>}/>
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
