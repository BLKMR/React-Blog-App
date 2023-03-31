import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from './Login';
import { Container } from '@mui/material';
import React from 'react';

function App() {

  return (
    <Container>
    <Router>
    <Navbar />
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/login" element={<Login />}></Route>       
        </Routes>
      </div>
    </div>
    </Router>
    </Container>
  
  );
}

export default App;