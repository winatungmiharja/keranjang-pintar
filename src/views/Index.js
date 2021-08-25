import React, { useState, useRef, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import Navbar from "../components/Navbars/Index.js";
import Footer from "../components/Footer/Index.js";
import Sidebar from "../components/Sidebar/Index.js";
import Camera from "../components/Camera/Index.js";
import Dashboard from "./_Dashboard/Index.js";
import Katalog from "./_Katalog/Index.js";
import Belanjaan from "./_Belanjaan/Index.js";
import Pembayaran from "./_Pembayaran/Index.js";
import Tentang from "./_Tentang/Index.js";

// import routes from "../routes";

let ps;
const Admin = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [activeColor, setActiveColor] = useState("info");

  const [focusedPath, setFocusedPath] = useState("");

  const mainPanel = useRef();
  const location = useLocation();
  const handle = useFullScreenHandle();

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        wheelSpeed: 0.2,
        wheelPropagation: true,
        minScrollbarLength: 100,
      });
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });

  useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  const handleActiveClick = (color) => {
    setActiveColor(color);
  };

  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };

  const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-tile-56",
      component: <Dashboard />,
      layout: "/admin",
      active: "danger",
    },
    {
      path: "/katalog",
      name: "Katalog",
      icon: "nc-icon nc-book-bookmark",
      component: <Katalog />,
      layout: "/admin",
      active: "success",
    },
    {
      path: "/belanjaan",
      name: "Belanjaan",
      icon: "nc-icon nc-basket",
      component: <Belanjaan />,
      layout: "/admin",
      active: "primary",
    },
    {
      path: "/pembayaran",
      name: "Pembayaran",
      icon: "nc-icon nc-credit-card",
      component: <Pembayaran setFocusedPath={setFocusedPath} />,
      layout: "/admin",
      active: "warning",
    },
    {
      pro: true,
      path: "/tentang",
      name: "Tentang Kami",
      icon: "nc-icon nc-alert-circle-i",
      component: <Tentang />,
      layout: "/admin",
      active: "info",
    },
  ];

  return (
    <FullScreen handle={handle}>
      <div className="wrapper">
        <Sidebar
          {...props}
          routes={routes}
          bgColor={backgroundColor}
          activeColor={activeColor}
          focusedPath={focusedPath}
        />
        <div className="main-panel" ref={mainPanel}>
          <Navbar
            {...props}
            handle={handle}
            bgColor={backgroundColor}
            activeColor={activeColor}
            handleActiveClick={handleActiveClick}
            handleBgClick={handleBgClick}
          />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  key={key}
                  render={() => prop.component}
                />
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
        <Camera />
      </div>
    </FullScreen>
  );
};

export default Admin;
