import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TasksPage from './pages/TasksPage';
import PostsPage from './pages/PostsPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
