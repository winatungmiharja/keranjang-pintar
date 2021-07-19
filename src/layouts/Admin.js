import React, {useState, useRef, useEffect} from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Camera from "components/Camera/Camera";
import './Admin.css';
import routes from "routes";


var ps;
const Admin = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [activeColor, setActiveColor] = useState("info");
  const mainPanel = useRef();
  const location = useLocation();
  const handle = useFullScreenHandle();
  

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
        ps = new PerfectScrollbar(mainPanel.current, {
          wheelSpeed: 0.2,
          wheelPropagation: true,
          minScrollbarLength: 100
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


  return (
    
    <FullScreen handle={handle}>
    
    <div className="wrapper">
    
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} 
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
                user={props.user}
                key={key}
                component={prop.component}
              />
            );
          })}
        </Switch>
        <Footer fluid />
      </div>
      <Camera/>
    </div>
    </FullScreen>
  );
}



export default Admin;
