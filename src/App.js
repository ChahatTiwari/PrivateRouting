import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Manage from './pages/Manage'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Manage/>} path="/manage"/>
            </Route>
            <Route element={<Login/>} path="/"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
