import logo from './logo.svg';
import './App.css';
import HeaderBeforeLogin from './components/partials/HeaderBeforeLogin';
import Input from './components/partials/Input';
import ListOfTodos from './components/partials/ListOfTodos';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todos from './components/todos/Todos';
import Authorize from './components/Authorize';

function App() {
  return (
    <>

      
      <BrowserRouter>
    <Toaster position='top-center'/>
      <Routes>
        <Route element={<Login/>} path='/' />
        <Route element={<Login/>} path='/login' />
        <Route element={<Authorize><Todos/></Authorize>} path='/todo'   />
        <Route element={<Register/>} path='/register'  />
      </Routes>

      </BrowserRouter>

      
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
