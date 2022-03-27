import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import Work from './components/work';
import MentorProject from './components/mentorProject';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/wedding-project" element={<MentorProject />} />
        <Route path="/mentor-project" element={<MentorProject />} />
        <Route path="/metal-n-clay-logo-project" element={<MentorProject />} />
        <Route path="/kathas-entertainment-logo-project" element={<MentorProject />} />
        <Route path="/trident-logo-project" element={<MentorProject />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
