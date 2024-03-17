import "./index.scss";
import header from "../../assets/Frame 168.png";
import user from "../../assets/mdi_account-alert-outline.png";
import search from "../../assets/akar-icons_search.png";
import like from "../../assets/akar-icons_heart.png";
import shop from "../../assets/ant-design_shopping-cart-outlined.png";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const [active, setactive] = useState(false);
  const [length, setLength] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const shopl = JSON.parse(localStorage.getItem("shop"));
      if (Array.isArray(shopl)) {
        setLength(shopl.length);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />

      <Headroom>
        <header>
          <div className="container">
            <div className="header">
              <div className="header_one">
                <img src={header} alt="" />
              </div>
              <div className={`heeader_two ${active ? "active" : ""}`}>
                <div className="x" onClick={() => setactive(!active)}>
                  <GrClose />
                </div>
                <NavLink to={"/"} onClick={() => setactive(!active)}>
                  Home
                </NavLink>
                <NavLink to={"shop"} onClick={() => setactive(!active)}>
                  Shop
                </NavLink>
                <NavLink to={"about"} onClick={() => setactive(!active)}>
                  About
                </NavLink>
                <NavLink to={"contact"} onClick={() => setactive(!active)}>
                  Contact
                </NavLink>
              </div>
              <div className="header_three">
                <img src={user} alt="" className="user" />
                <img src={search} alt="" />
                <img src={like} alt="" className="like" />
                <span className="cart">
                  <span className=""> </span>
                  <img src={shop} alt="" />
                </span>
                <div className="menu" onClick={() => setactive(!active)}>
                  <AiOutlineMenu />
                </div>
              </div>
            </div>
          </div>
        </header>
      </Headroom>
    </>
  );
};

export default Header;
