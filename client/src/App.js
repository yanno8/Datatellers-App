import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RegisterPage from "./pages/register"

function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<RegisterPage /> } />
    </Routes>
  );
}

export default App;
