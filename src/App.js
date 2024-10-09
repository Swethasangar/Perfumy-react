import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Products from "./components/Products.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    // Fragment
    <>
      <Navbar></Navbar>
      <Search></Search>
      <Products></Products>
      <About></About>
      <Footer></Footer>
    </>
  );
}
export default App;
