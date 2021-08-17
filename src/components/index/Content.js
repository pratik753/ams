import "./Content.css";
import { Container, Row, Col } from "react-bootstrap";

import HowToRegIcon from "@material-ui/icons/HowToReg";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DescriptionIcon from "@material-ui/icons/Description";
import PaymentIcon from "@material-ui/icons/Payment";

const Content = () => {
  const styleForPaper = {
    width: "5rem",
    height: "5rem",
    color: "white",
    padding: "1rem",
  };

  return (
    <>
      <div className="maindivv">
        <div className="headercont">
          <h2 className="header">Application Form 2021</h2>
          <ol className="oldiv">
            <li>Register Yourself</li>
            <li>Fill Application form Online</li>
            <li>Upload Your Document</li>
            <li>Pay Admission Fee</li>
            <li>Amount Rs. 10,000</li>
          </ol>
        </div>
        <div className="textheadingc">Steps to Follow</div>

        <div className="iconcontc">
          <Container>
            <Row className="contain">
              <Col>
                <div className="iconboxc">
                  <HowToRegIcon style={styleForPaper}></HowToRegIcon>
                  <div className="texticon">Register Yourself</div>
                </div>
              </Col>
              <Col>
                <div className="iconboxc">
                  <AssignmentIndIcon style={styleForPaper}></AssignmentIndIcon>
                  <div className="texticon">Fill Application Form</div>
                </div>
              </Col>
              <Col>
                <div className="iconboxc">
                  <DescriptionIcon style={styleForPaper}></DescriptionIcon>
                  <div className="texticonc">Upload Your Document</div>
                </div>
              </Col>
              <Col>
                <div className="iconboxc">
                  <PaymentIcon style={styleForPaper}></PaymentIcon>
                  <div className="texticonc">Pay Admission Fee</div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Content;
