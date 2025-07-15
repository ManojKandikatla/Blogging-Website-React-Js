import "./App.css";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import CategoryBlogs from "./pages/CategoryBlogs/CategoryBlogs";
import DedicatedBlog from "./pages/DedicatedBlogs/DedicatedBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/blogs/category/:category" element={<CategoryBlogs />} />
        <Route path="/blog/:id" element={<DedicatedBlog />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
      
    </>
  );
}

export default App;

