import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AddSciencePage from './pages/AddSciencePage.jsx';
import AddHistoryPage from './pages/AddHistoryPage.jsx';
import ScienceBooks from './components/books/ScienceBooks.jsx';
import HistoryBooks from './components/books/HistoryBooks.jsx';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/science" element={<ScienceBooks />} />
      <Route path="/history" element={<HistoryBooks />} />
      <Route path="/add-science" element={<AddSciencePage />} />
      <Route path="/add-history" element={<AddHistoryPage />} />
    </Routes>
  )
}

export default App
