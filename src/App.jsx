import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/common/Footer";
import Profile from "./pages/Profile";
import Header from "./components/common/Header";
import DeliveryDetails from "./pages/DeliveryDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="deliveries" element={<DeliveryDetails />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
