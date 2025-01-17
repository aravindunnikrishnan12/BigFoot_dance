import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import SignIn from './pages/user/SignIn';
import SignUp from "./pages/user/SignUp ";
import Services from "./pages/user/Services";
// import ServiceDetails from "./pages/user/ServiceDetails";
import AboutUs from "./pages/user/AboutUs";
import ContactUs from "./pages/user/ContactUs";
import ShopPage from "./pages/user/shop/Shop";
import ProductDetailPage from "./pages/user/shop/ProductDetailPage";
import CheckoutPage from "./pages/user/shop/CheckoutPage";
import Profile from "./pages/user/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Shop" element={<ShopPage/>} />
        <Route path="/Shop/ProductDetailPage" element={<ProductDetailPage/>} />
        <Route path="/CheckoutPage" element={<CheckoutPage/>} />
        
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
