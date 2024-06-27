import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DeliveryList from './pages/DeliveryList';
import DeliveryDetails from './pages/DeliveryDetails';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Home from './pages/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/deliveries" element={<DeliveryList />} />
    <Route path="/delivery/:id" element={<DeliveryDetails />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default AppRoutes;
