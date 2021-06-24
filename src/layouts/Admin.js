import React, {useState, useRef, useEffect, useReducer} from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import './Admin.css';
import routes from "routes";


var ps;

const initialBasket = {
  total : 0,
  items : {}
}

const reducerBasket = (state,action) => {
  switch (action.type) {
    case "UPDATE":
      const tempData = {...state.items};
      

      break;
  
    default:
      break;
  }
}
const Admin = (props) => {
  const [basket, dispatch] = useReducer(reducerBasket, initialBasket);

  const [backgroundColor, setBackgroundColor] = useState("black");
  const [activeColor, setActiveColor] = useState("info");
  const mainPanel = useRef();
  const location = useLocation();
  
  

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
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
        
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                key={key}
                component={prop.component}
              />
            );
          })}
        </Switch>
        <Footer fluid />
      </div>
      <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      />
    </div>
  );
}



export default Admin;
