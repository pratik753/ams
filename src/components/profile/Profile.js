import MainNavigation from "../nav_footer/MainNavigation";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <MainNavigation />
      <div className="textheading">Profile</div>

      <Container>
        <div className="formheading">Applicant's Details</div>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield"> Name</div>

            <div className="labelfieldinput">Pratik</div>
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Phone</div>

            <div className="labelfieldinput">9097186189</div>
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Father's Name</div>

            <div className="labelfieldinput">Father</div>
          </Col>
          <Col className="fieldcol">
            <div className="labelfield"> Mother' Name</div>

            <div className="labelfieldinput">Mother</div>
          </Col>
        </Row>

        <div className="formheading">Parent's Details</div>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield"> Name</div>

            <div className="labelfieldinput">Pratik</div>
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Phone</div>

            <div className="labelfieldinput">9097186189</div>
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Father's Name</div>

            <div className="labelfieldinput">Father</div>
          </Col>
          <Col className="fieldcol">
            <div className="labelfield"> Mother' Name</div>

            <div className="labelfieldinput">Mother</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link to="/enquiry">
              <button className="buttonsavenext ">Edit</button>
            </Link>
          </Col>

          <Col>
            <Link to="/paymenthome">
              <button className="buttonsavenext ">Payment </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
