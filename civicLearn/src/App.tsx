import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Process from './pages/Process';
import Quiz from './pages/Quiz';
import ElectionDetail from './pages/ElectionDetail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/election/:type" element={<ElectionDetail />} />
          <Route path="process" element={<Process />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
