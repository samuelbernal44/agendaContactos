import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Form } from './views';
import NavBar from './components/NavBar/NavBar';

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
