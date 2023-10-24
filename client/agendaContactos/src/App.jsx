import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Form } from './views';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [data, setData] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/contact');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
