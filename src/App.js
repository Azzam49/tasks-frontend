import Login from './pages/Login';
import Home from './pages/Home.js';
import Tasks from './pages/Tasks.js';
import CompletedTasks from './pages/CompletedTasks.js';
import PendingTasks from './pages/PendingTasks.js';
import Header from './layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <Router>
          <div className="container-fluid">
            <div className="row">
              <ToastContainer
                position="bottom-center"
              />
              <Header/>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route exact path="/tasks" element={<Tasks />}/>
                  <Route exact path="/completed-tasks" element={<CompletedTasks />}/>
                  <Route exact path="/pending-tasks" element={<PendingTasks />}/>
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
    </>
  );
}

export default App;
