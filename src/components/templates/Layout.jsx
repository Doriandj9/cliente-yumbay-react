import { useEffect, useState } from "react";
import logo from "./../../assets/imgs/logo.jpg";
import { BsListUl } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { RiWifiOffLine, RiWifiFill } from "react-icons/ri";
import "animate.css";
import { useUserStore } from "../../store/userStore";
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
const Layout = ({ navbar, content, index = false, component=<></> }) => {
  const [movil, setMovil] = useState(false);
  const [offline, setOffline] = useState(false);
  const [online, setOnline] = useState(false);
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    window.addEventListener(
      "offline",
      (e) => {
        e.preventDefault();
        console.log("offline");
        setOffline(true);
      },
      { capture: true }
    );
    window.addEventListener(
      "online",
      (e) => {
        e.preventDefault();
        console.log("online");
        setOnline(true);
      },
      { capture: true }
    );
  }, []);
  const handleMenu = (e) => {
    setMovil(true);
  };
  const handleClose = (e) => {
    setMovil(false);
  };
  const handleCloseAlert = (e) => {
    setOffline(false);
  };
  const handleCloseAlertOn = (e) => {
    setOnline(false);
  };
  return (
    <>
      {offline && (
        <>
          <Snackbar
            open={offline}
            autoHideDuration={7000}
            className="pb-0"
            onClose={handleCloseAlert}
            TransitionComponent={SlideTransition}
            message={
              <>
                <p className="d-flex align-items-center gap-3 h-100 w-100 justify-content-center p-0 m-0">
                  <RiWifiOffLine style={{ fontSize: "1.75rem" }} />
                  <span>
                    No estas conectado a internet.
                    <br />
                    Algunas funcionalidades fallarán.
                  </span>
                </p>
              </>
            }
          />
        </>
      )}
      {online && (
        <>
          <Snackbar
            open={online}
            autoHideDuration={7000}
            className="pb-0"
            onClose={handleCloseAlertOn}
            TransitionComponent={SlideTransition}
            message={
              <>
                <p className="d-flex align-items-center gap-3 h-100 w-100 justify-content-center p-0 m-0">
                  <RiWifiFill
                    className="text-secondary"
                    style={{ fontSize: "1.75rem" }}
                  />
                  <span>Tienes coneción a internet.</span>
                </p>
              </>
            }
          />
        </>
      )}
      <div id="offline"></div>
      <div key={"lay-lay-001"} className="container__layout">
        <div key={"lay-cont-001"} className="navbar__responsive">
          {movil ? (
            <AiOutlineClose onClick={handleClose} className="icon__menu" />
          ) : (
            <BsListUl onClick={handleMenu} className="icon__menu"></BsListUl>
          )}
        </div>
        <div
          key={"lay-cont-002"}
          className={
            movil
              ? "navbar__layout content-width w-75 d-block animate__animated animate__fadeInLeft animate__faster"
              : "navbar__layout content-width"
          }
        >
          {navbar}
        </div>
        <main key={"lay-main-001"} className="main_layout">
          <div key={"lay-001"} className="content-width"></div>
          <div key={"lay-002"} className="content__layout">
            {index && (
              component
            )}
            {content}
          </div>
        </main>
        {/* <img src={logo} className='img__layout' alt="" /> */}
      </div>
    </>
  );
};

export default Layout;
