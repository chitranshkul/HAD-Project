import React, { useState, useContext, memo, Fragment } from "react";

//Router
import { Link } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

//Componets
import SidebarMenu from "./sidebar-menu";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;


  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo(() => {
  
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState("");
  const[dashboardURL,setDashBoardURL] = useState("");
  const[role,setRole] = useState(localStorage.getItem("role"));

  useState(() => {
    const role = localStorage.getItem("role")
    if(role=="EXPERT")
      setDashBoardURL("/home/ExpertDashboard")
    else if(role=="MODERATOR")
      setDashBoardURL("/home/ModeratorDashboard")
    else if(role=="DOCTOR")
      setDashBoardURL("/home/DoctorDashboard")
    else if(role=="PATIENT")
      setDashBoardURL("/home/PatientDashboard")
    else if(role=="ADMIN")
      setDashBoardURL("/home/AdminDashboard")
  }, []);

  return (
    <Fragment>
      {/* <div id="sidebar-scrollbar"> */}
      <nav className="iq-sidebar-menu">
        <Accordion as="ul" className="iq-menu">
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Dashboard</span>
          </li>

          <SidebarMenu isTag="true" pathname={dashboardURL} title="Dashboard">
            <i className="ri-hospital-fill"></i>
          </SidebarMenu>

          
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Appointments</span>
          </li>

          {role === "PATIENT" && (
          <SidebarMenu isTag="true" pathname="/home/all-doctors" title="Doctors List">
            <i className="ri-calendar-event-fill"></i>
          </SidebarMenu>
          )}

          {role === "ADMIN" &&  (
          <SidebarMenu isTag="true" pathname="/home/add-doctors" title="Add User">
            <i className="ri-calendar-event-fill"></i>
          </SidebarMenu>
          )}

          {/* Chat */}
          <SidebarMenu isTag="true" pathname="/home/chat" title="Chat">
            <i className="ri-message-fill"></i>
          </SidebarMenu>
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Question Answer Forum</span>
          </li>
          <SidebarMenu isTag="true" pathname="/home/questions" title="Ask Question">
            <i className="fa fa-question-circle"></i>
          </SidebarMenu>

          {role === "PATIENT" && (
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Self Help Assessment</span>
          </li>
          )}
          <SidebarMenu isTag="true" pathname="/home/slef-help-app" title="Assessment">
            <i className="fa fa-list-alt"></i>
          </SidebarMenu>
          
        </Accordion>
      </nav>
      <div className="p-3"></div>
      {/* </div> */}
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
