import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import ApiData from './components/ApiData';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<ApiData />} />
      </Routes>
    </Layout>
  );
}

export default App;
