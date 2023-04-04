import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Edit from './components/Edit';
import Form from './components/Form';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='form' element={<Form />} />
            <Route exact path="edit/:id" element={<Edit/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
