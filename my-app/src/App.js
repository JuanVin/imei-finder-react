
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./component/Formulario";
function App() {
  return (

    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formulario' element={<Formulario/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
