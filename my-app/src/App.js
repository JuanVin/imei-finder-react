
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
