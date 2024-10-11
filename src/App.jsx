import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BMI from './Exercice3/BMI';
import Articles from './Exercice4/components/Articles';
import Navbar from './Nav/Navbar';
import AddArticle from './Exercice4/components/AddArticle';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Ex4' element={<Articles />} />
        <Route path='/Ex3' element={<BMI />} />
        <Route path='/form' element={<AddArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
