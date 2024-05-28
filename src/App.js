import Login from './pages/Login';
import Home from './pages/Home.js';
import Tasks from './pages/Tasks.js';
import CompletedTasks from './pages/CompletedTasks.js';
import PendingTasks from './pages/PendingTasks.js';
import NotFound from './pages/NotFound';
import Header from './layout/Header';
import UserLoginProvider from '../src/context/UserLoginProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <ToastContainer
          position="bottom-center"
        />
        <UserLoginProvider>
          <Router>
            <div className="container-fluid">
              <div className="row">
                <Header/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/tasks" element={<Tasks />}/>
                    <Route exact path="/completed-tasks" element={<CompletedTasks />}/>
                    <Route exact path="/pending-tasks" element={<PendingTasks />}/>
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </Router>
        </UserLoginProvider>
    </>
  );
}

export default App;
