import "./App.css";
import Home from "./components/pages/Home";
import AdminReport from "./components/pages/AdminReport";
import { Route, Switch, Redirect } from "react-router-dom";
import Enquiry from "./components/pages/EnquiryForm";
import { useState } from "react";
import { useHistory } from "react-router";
function App() {
  const [value, setvalue] = useState(false);
  const history = useHistory();
  function setlogin(a) {
    console.log(a);
    setvalue(true);
  }
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home onlogin={setlogin} />
        </Route>
        <Route path="/admin" exact>
          <AdminReport />
        </Route>
        <Route path="/enquiry" exact>
          <Enquiry />
        </Route>

        {/* <Route path="/" exact>
          <Home onlogin={setlogin} />
        </Route>
        <Route path="/admin" exact>
          <AdminReport />
        </Route>
        {
          <Route path="/enquiry" exact>
            {value && <Enquiry />}
            {!value && <Redirect to="/" />}
          </Route>
        } */}
      </Switch>
    </div>
  );
}

export default App;
