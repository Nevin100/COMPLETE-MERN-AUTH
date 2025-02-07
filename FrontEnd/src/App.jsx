import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ProtectedRoute from "./utilis/ProtectedRoute.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
