import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/catalog";
import QuantityPicker from "./components/quantityPicker";
import Catalog from "./components.catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootsttrap/dist/js/bootstrap.min.js";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalState from "./components/globalState";


function App() {
  return ( 
    <div className="App">
      <GlobalState>
        <BrowserRouter>
        <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/home" element={<Home />} ></Route>
            <Route path="/catalog" element={<Catalog />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/admin" element={<Admin />} ></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div> 
  );
}

export default App;
