import Login from './pages/Login';
import Home from './pages/Home.js';
import Header from './layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
