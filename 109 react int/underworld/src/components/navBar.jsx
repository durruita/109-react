import "./navBar.css"
import { Link } from "react-router-dom";
import store from "../context/storeContext";
import { useContext } from "react";

const NavBar = () => {
  const cart = useContext(store).cart;

  const getNumber = () => {
    let total = 0;
    for(let i=0; i < total.length; i++) {
      let prod = cart[i];
      total+= prod.quantity;
    }

    return total;
    //return cart.length;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Underworld
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSuppportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <link className="nav-link active" aria-current="page" to="/">
                Home 
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link" to="/catalog">
                Catalog
              </link>
            </li>

            <li className="nav-item">
              <link className="nav-link" to="/about">
                About
              </link>
            </li>

            <li className="nav-item">
              <link className="nav-link" to="/admin">
                Admin page
              </link>
            </li>

            <li className="nav-item">
              <link className="nav-link" to="/cart">
                Cart
              </link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/cart className="btn btn-outline-light>
              <span className="badge bg-info ">{getNumber()}</span> View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
