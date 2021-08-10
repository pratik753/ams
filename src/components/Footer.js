import "./Footer.css";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <h6>About Us</h6>
              <ul className="footer-links">
                <li>
                  <i className="fas fa-map-marker-alt"></i>Trident Academy of
                  Technology, a name that has become a brand in the field of
                  technical education, is today synonymous with
                  excellence.Trident is where Education meets Enthusiasm. Within
                  just a few years of its establishment, Trident group of
                  institutions has built an image amongst the aspiring masses
                  which is worth the quality of education it imparts.
                </li>
                <li>
                  <div className="map"> </div>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-4">
              <h6>Connect Us</h6>
              <ul className="footer-links">
                <li>
                  <i className="fas fa-envelope"></i>
                </li>

                <li>
                  <PhoneIcon />
                  0674-6649003, 6649008, 6649036, 0674-6649043
                </li>
                <li>
                  <i className="fas fa-tty"></i>&emsp;022-79615327
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14964.11209949422!2d85.808283!3d20.3404609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1628493094917!5m2!1sen!2sin
                "
                width="350"
                height="200"
                // style={{color: "red"}}
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                &copy; 2016 - TRIDENT ACADEMY OF TECHNOLOGY
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://m.facebook.com/Vibgyor-Advisors-100787492108783/"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://twitter.com/AdvisorsVibgyor"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="dribbble"
                    href="https://www.instagram.com/vibgyor_advisors/"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/company/vibgyor-advisors/"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
