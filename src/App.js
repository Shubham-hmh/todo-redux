import './App.css';
import { BrowserRouter, Routes, Route ,Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Edit from './components/Edit';
import Form from './components/Form';



function App(props) {
  const isLoggedIn =true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
          <Route index element ={<Login/>} />
            <Route path="home" element ={<Home/>}  />
            <Route path='signup' element={<Signup/>} />
            <Route path='home/form' element={<Form />} />
            <Route exact path="home/edit/:id" element={<Edit/>} />
          </Route>

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
