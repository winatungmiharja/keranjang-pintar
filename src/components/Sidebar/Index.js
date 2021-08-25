import React from "react";
import { NavLink as NavRouter } from "react-router-dom";
import { Nav, NavLink, NavItem } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

var ps;

const Sidebar = (props) => {
  const { focusedPath } = props;

  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a className="simple-text logo-mini">
          <i className="nc-icon nc-bulb-63"></i>
        </a>
        <a className="simple-text logo-normal">Keranjang pintar</a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        {focusedPath ? (
          <Nav>
            {props.routes.map((prop, key) => {
              return (
                <li
                  className={
                    activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  {prop.path === focusedPath ? (
                    <NavLink className="nav-link" activeClassName="active">
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  ) : (
                    <NavLink
                      disabled
                      style={{ cursor: "context-menu", opacity: 0.1 }}
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  )}
                </li>
              );
            })}
          </Nav>
        ) : (
          <Nav>
            {props.routes.map((prop, key) => {
              return (
                <li
                  className={
                    activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavRouter
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavRouter>
                </li>
              );
            })}
          </Nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
