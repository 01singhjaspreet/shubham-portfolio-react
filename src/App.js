import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import Work from './components/work';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
