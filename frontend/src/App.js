import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" exact element={<Home name={name} />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout setName={setName} />} />
            <Route path="/chores" element={<Chores name={name} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div >
  );
}

export default App;
