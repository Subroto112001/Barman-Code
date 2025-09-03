import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Parentpage from './Parent/Parentpage';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Pricing from './Pages/Pricing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parentpage />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App