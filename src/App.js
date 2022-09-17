import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import Work from './components/work';
import WeddingProject from './components/weddingProject';
import MentorProject from './components/mentorProject';
import MetalProject from './components/metalnClayLogoProject';
import KathasProject from './components/kathasEntertainmentLogoProject';
import TridentLogoProject from './components/tridentLogoProject';
import NastaProject from './components/nastaProject';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/wedding-project" element={<WeddingProject />} />
        <Route path="/mentor-project" element={<MentorProject />} />
        <Route path="/metal-n-clay-logo-project" element={<MetalProject />} />
        <Route path="/kathas-entertainment-logo-project" element={<KathasProject />} />
        <Route path="/trident-logo-project" element={<TridentLogoProject />} />
        <Route path="/nasta-project" element={<NastaProject />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
