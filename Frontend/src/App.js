import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import AddRecipients from './pages/AddRecipients/AddRecipients';
import Home from './pages/Home/Home';
import Compose from './pages/ComposeMail/Compose';
import Variant from './pages/Variant/Variant';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-recipients' element={<AddRecipients />} />
        <Route path='compose' element={<Compose />} />
        <Route path='/variant' element={<Variant />} />
      </Routes>
    </>
  );
}

export default App;
