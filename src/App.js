import Login from './pages/Login';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
