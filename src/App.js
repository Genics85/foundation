import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route  path="/home" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
