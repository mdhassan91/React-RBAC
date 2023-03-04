import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import PrivateAdminRoute from './utils/PrivateAdminRoute';
import PrivateProviderRoute from './utils/PrivateProviderRoute';
import Admin from './pages/Admin';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Products/>} path="/products"/>
            </Route>
            <Route element={<PrivateAdminRoute />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Admin/>} path="/admin"/>
            </Route>
            <Route element={<PrivateProviderRoute />}>
             
                <Route element={<Products/>} path="/provider"/>
            </Route>
            <Route element={<Login/>} path="/login"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
