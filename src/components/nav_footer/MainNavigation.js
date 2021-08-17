import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assists/image/logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const MainNavigation = () => {
  const styleForPaper = {
    width: "5rem",
    height: "5rem",
    color: "white",
    padding: "1rem",
    margin: "2rem",
  };
  const stylebtn = {
    boxShadow: " 0 0 0 .25rem rgba(13, 110, 253, 0)",
  };
  const stylemenu = {
    background: "#91b8c7",
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.img} src={logo} />
      </div>
      <nav className={classes.nav}>
        <div className={classes.divcont}>
          <div className={classes.navtext}>
            Helpdesk: 9097186189
            <br />
            Monday – Saturday (except public holidays) 9:00 AM to 5:00 PM
            <br />
            Email:admissions@tat.edu.in
          </div>
          {/* <AccountCircleIcon style={styleForPaper} /> */}
          <Dropdown className="dropmargin">
            <Dropdown.Toggle
              variant="none"
              className={classes.btnsecondary}
              style={stylebtn}
            >
              {/* Banking */}
              <AccountCircleIcon style={styleForPaper} />
            </Dropdown.Toggle>

            <Dropdown.Menu style={stylemenu}>
              <Dropdown.Item>
                <Link to="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/profile">Payment</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/profile">Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};
export default MainNavigation;
