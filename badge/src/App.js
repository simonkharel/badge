import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import StockPage from './pages/StockPage';
import Navigation from './components/Navigation';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/stock-page" element={<StockPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
