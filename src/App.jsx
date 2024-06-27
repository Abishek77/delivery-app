import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/common/Footer";
import Profile from "./pages/Profile";
import Header from "./components/common/Header";
import DeliveryList from "./pages/DeliveryList";
import Earnings from "./pages/Earnings";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="deliveries" element={<DeliveryList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="earnings" element={<Earnings />} />
      </Routes>

      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
