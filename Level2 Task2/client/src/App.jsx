import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Policy from "./components/pages/Policy";
import PageNotFound from "./components/pages/PageNotFound";
import Register from "./components/pages/Auth/Register";
import Login from "./components/pages/Auth/Login";
import Categories from "./components/pages/Categories";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
