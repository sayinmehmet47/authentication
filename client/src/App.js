import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
