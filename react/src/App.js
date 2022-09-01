import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import Edit from './Edit';
import axios from 'axios';


axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] ='application/json';
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Edit" element={<Edit />} />
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
