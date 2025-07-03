import { Routes,Route } from "react-router-dom";

import Header from "./components/header";
import HomePage from "./pages/HomePages";
import DestinationPage from "./pages/DestinationPage";
import TripPage from "./pages/tripTypePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/footer";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<TripPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/tripTypePage" element={<TripPage />} />
        <Route path="/destinationPage" element={< DestinationPage/>} />
      </Routes>
      <Footer/>
   
    </>
  );
}

export default App;
