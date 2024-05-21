import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getUser} from './api/user';
import { UserContext } from './UserContext';
import {toast, ToastContainer} from 'react-toastify';

import Demo from './pages/Demo.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Analytics from './pages/Analytics.jsx'
import Sidebar from './components/Sidebar.jsx'
import Notfound from './pages/Notfound.jsx'
import Rmt from './pages/Rmt.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx';


function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscibre = getUser().then((res) => {
      if (res.error) toast(res.error);
      else setUser(res.username);
    }).catch((err => {toast(err)}));

    return () => unsubscibre;
  }, []);

  return (
    <>
      <Router>
      <UserContext.Provider value={{user, setUser}}>
        <Sidebar>
        <ToastContainer />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/demo' element={<Demo />} />
            <Route path='/rmt' element={<Rmt />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Sidebar>
        </UserContext.Provider>
      </Router>
    </>
  )
}

export default App
