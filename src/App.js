import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from './components/nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
      </div>
    </BrowserRouter>
  );
}

export default App;
