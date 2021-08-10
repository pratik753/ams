import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SchoolIcon from "@material-ui/icons/School";
const Iconnav = () => {
  const styleForPaper = {
    width: "5rem",
    height: "5rem",
    color: "white",
    padding: "1rem",
  };
  return (
    <>
      <div className="textheading">Trident Application Form 2021-22</div>

      <div className="iconcont">
        <Container>
          <Row className="contain">
            <Col>
              <div className="iconbox">
                <PersonIcon style={styleForPaper}></PersonIcon>
                <div className="texticon">Applicant Details</div>
              </div>
            </Col>
            <Col>
              <div className="iconbox">
                <GroupIcon style={styleForPaper}></GroupIcon>
                <div className="texticon"> Parent's Details</div>
              </div>
            </Col>
            <Col>
              <div className="iconbox">
                <LocationOnIcon style={styleForPaper}></LocationOnIcon>
                <div className="texticon">Address Details</div>
              </div>
            </Col>
            <Col>
              <div className="iconbox">
                <SchoolIcon style={styleForPaper}></SchoolIcon>
                <div className="texticon">Academic Details</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Iconnav;
