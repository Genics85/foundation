import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
