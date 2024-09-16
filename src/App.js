import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatBot from './component/ChatBot';  // Importing ChatBot component
import Login from './component/Login';  // Importing Login component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<Login />} />  {/* Redirecting default path to Login */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          <Route path="/chatbot" element={<ChatBot />} />  {/* ChatBot page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
