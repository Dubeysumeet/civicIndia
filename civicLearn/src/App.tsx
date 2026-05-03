import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Basics from './pages/Basics';
import Types from './pages/Types';
import TypeDetail from './pages/TypeDetail';
import Process from './pages/Process';
import Rights from './pages/Rights';
import History from './pages/History';
import Elections from './pages/Elections';
import ElectionDetail from './pages/ElectionDetail';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basics" element={<Basics />} />
          <Route path="types" element={<Types />} />
          <Route path="types/:type" element={<TypeDetail />} />
          <Route path="process" element={<Process />} />
          <Route path="rights" element={<Rights />} />
          <Route path="history" element={<History />} />
          <Route path="elections" element={<Elections />} />
          <Route path="elections/:id" element={<ElectionDetail />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
