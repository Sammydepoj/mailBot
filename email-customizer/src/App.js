import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import AddRecipients from './pages/AddRecipients/AddRecipients';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-recipients' element={<AddRecipients />} />
      </Routes>
    </>
  );
}

export default App;
