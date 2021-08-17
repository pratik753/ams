import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SchoolIcon from "@material-ui/icons/School";
import Applicantdetails from "./Applicantdetails";
import ParentDetails from "./ParentDetails";
import Address from "./Address";
import AcademicDetails from "./AcademicDetails";
import { useState } from "react";
import { Link } from "react-router-dom";
const Iconnav = () => {
  const styleForPaper = {
    width: "5rem",
    height: "5rem",
    color: "white",
    padding: "1rem",
  };
  const [showdiv, setshowdiv] = useState(1);
  const [stylediv1, setstylediv1] = useState("iconbox active");
  const [stylediv2, setstylediv2] = useState("iconbox");
  const [stylediv3, setstylediv3] = useState("iconbox");
  const [stylediv4, setstylediv4] = useState("iconbox");
  // let showdetail = 0;
  const Applicantdetailhandlar = () => {
    setstylediv1("iconbox active");
    setstylediv2("iconbox");
    setstylediv3("iconbox");
    setstylediv4("iconbox");
    setshowdiv(1);
  };
  const Academicdetailhandlar = () => {
    setstylediv1("iconbox");
    setstylediv2("iconbox active");
    setstylediv3("iconbox");
    setstylediv4("iconbox");
    setshowdiv(2);
  };
  const Parentdetailhandlar = () => {
    setstylediv1("iconbox");
    setstylediv2("iconbox");
    setstylediv3("iconbox active");
    setstylediv4("iconbox");
    setshowdiv(3);
  };
  const Addressdetailhandlar = () => {
    setstylediv1("iconbox");
    setstylediv2("iconbox");
    setstylediv3("iconbox");
    setstylediv4("iconbox active");
    setshowdiv(4);
  };

  const nexthandler = () => {
    let temp = showdiv;
    temp = temp + 1;
    if (temp == 5) {
      temp = 1;
    }
    if (temp == 1) {
      Applicantdetailhandlar();
    } else if (temp == 2) {
      Academicdetailhandlar();
    } else if (temp == 3) {
      Parentdetailhandlar();
    } else if (temp == 4) {
      Addressdetailhandlar();
    }
    setshowdiv(temp);
  };

  return (
    <>
      <div className="textheading">Trident Application Form 2021-22</div>

      <div className="iconcont">
        <Container>
          <Row className="contain">
            <Col>
              <div className={stylediv1} onClick={Applicantdetailhandlar}>
                <PersonIcon style={styleForPaper}></PersonIcon>
                <div className="texticon">Applicant Details</div>
              </div>
            </Col>
            <Col>
              <div className={stylediv2} onClick={Academicdetailhandlar}>
                <SchoolIcon style={styleForPaper}></SchoolIcon>
                <div className="texticon">Academic Details</div>
              </div>
            </Col>
            <Col>
              <div className={stylediv3} onClick={Parentdetailhandlar}>
                <GroupIcon style={styleForPaper}></GroupIcon>
                <div className="texticon">Parent's Details</div>
              </div>
            </Col>
            <Col>
              <div className={stylediv4} onClick={Addressdetailhandlar}>
                <LocationOnIcon style={styleForPaper}></LocationOnIcon>
                <div className="texticon">Address Details</div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="formcontainer">
          {showdiv == 1 && <Applicantdetails />}
          {showdiv == 2 && <AcademicDetails />}
          {showdiv == 3 && <ParentDetails />}
          {showdiv == 4 && <Address />}
          <Container>
            <Row>
              <Col>
                {" "}
                <Link to="/profile">
                  <button className="buttonsavenext">Save & Exit</button>
                </Link>
              </Col>
              <Col className="divbutton">
                {" "}
                <button className="buttonnext" onClick={nexthandler}>
                  Next
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Iconnav;
