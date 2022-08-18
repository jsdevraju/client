import { Route, Routes } from "react-router-dom";
import Home from './app/pages/Home'
import Login from './app/pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
