import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Requests from './components/Requests';

const AppRouter = () => (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Requests" component={Requests} />
    {/* Add more routes for other pages if needed */}
  </Routes>
);

export default AppRouter;
