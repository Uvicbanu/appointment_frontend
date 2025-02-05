import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loging from "./pages/loging/loging";
import OwnerRegister from "./pages/ownerRegister/ownerRegister";
import UserRegister from "./pages/userRegister/userRegister";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import AppOpening from "./pages/openning/app-openning";
import Sample from "./component/sample/sample";


import './App.css';

function App() {
  return (
    <Router>

      <Header />

      {/* <Sample /> */}

      <Routes>
        <Route path="/hello" element={<Sample/>} />
        <Route path="/app-openning" element={<AppOpening/>} />
        <Route path="/login" element={<Loging />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/user-register" element={<UserRegister />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
