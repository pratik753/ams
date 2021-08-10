import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logo from "./assists/image/logo.png";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.img} src={logo} />
      </div>
      <nav className={classes.nav}>
        <div className={classes.navtext}>
          Helpdesk: 9097186189
          <br />
          Monday – Saturday (except public holidays) 9:00 AM to 5:00 PM
          <br />
          Email:admissions.india@srmist.edu.in
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
