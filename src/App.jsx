import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Parentpage from './Parent/Parentpage';
import Homepage from './Pages/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parentpage />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App