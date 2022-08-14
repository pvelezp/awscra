import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Recipe } from './pages';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe/*' element={<Recipe />} />
    </Routes>
     
    </div>
  );
}

export default App;
