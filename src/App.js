import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
