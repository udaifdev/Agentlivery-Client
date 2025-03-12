import React from 'react';
import { Route, Routes } from 'react-router-dom';

// User Routes
import LanderPage from './pages/user/LanderPage';
import ServicePage from './pages/user/ServicePage';
import TeamPage from './pages/user/TeamPage';
import ContactPage from './pages/user/ContactPage';
import BlogPage from './pages/user/BlogPage';

// Admin Routes
import Login from './component/admin/Login';
import AdminDashboard from './component/admin/Dashboard';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LanderPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path='/team' element={<TeamPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/blog' element={<BlogPage />} />


      <Route path='/adminLogin' element={<Login/>}/>
      <Route path='/adminDashboad' element={<AdminDashboard/>}/>
    </Routes>
  );
};

export default App;
