import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Browse from './components/Browse';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
