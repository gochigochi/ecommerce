import * as React from 'react';
import './style.css';
import NavBar from './NavBar';
import ListContainer from './ListContainer';
import SomePage from './SomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListContainer />} />
        <Route path="/category/:cat" element={<ListContainer />} />
        <Route path="/some-page" element={<SomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
