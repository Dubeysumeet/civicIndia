import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Process from './pages/Process';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="process" element={<Process />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
