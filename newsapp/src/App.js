import logo from './logo.svg';
import './App.css';

import React, { Component, createRef } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';


export default class App extends Component {
  

  render() {
    return (
      <div>
        <Navbar title="NEWSAlert" />
       
        <Routes>
          <Route exact path="/" element={<News  key="general" pageSize={10} country="us" category="general" />} />
          <Route exact path="/about" element={<News  key="about" pageSize={10} country="us" category="about" />} />
          <Route exact path="/general" element={<News  key="general" pageSize={10} country="us" category="general" />} />
          <Route exact path="/business" element={<News  key="business" pageSize={10} country="us" category="business" />} />
          <Route exact path="/technology" element={<News  key="technology" pageSize={10} country="us" category="technology" />} />
          <Route exact path="/sports" element={<News  key="sports" pageSize={10} country="us" category="sports" />} />
          <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={10} country="us"category="entertainment" />} />
          <Route exact path="/science" element={<News  key="science" pageSize={10} country="us" category="science" />} />
          <Route exact path="/health" element={<News  key="health" pageSize={10} country="us" category="health" />} />
        </Routes>
      </div>
    );
  }
}
