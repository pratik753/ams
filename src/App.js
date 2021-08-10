import "./App.css";
import Home from "./components/pages/Home";
import AdminReport from "./components/pages/AdminReport";
import { Route, Switch, Redirect } from "react-router-dom";
import Enquiry from "./components/pages/EnquiryForm";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/admin" exact>
          <AdminReport />
        </Route>
        <Route path="/enquiry" exact>
          <Enquiry />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
