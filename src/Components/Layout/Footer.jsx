import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import "./Footer.css";


const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  console.log("year", year);


  return (
    <>
      <div className="footer bg-dark text-light text-center p-3">
        <div className="container" style={{width: ""}}>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <h5 className=" my-2 mx-2">Connect with us</h5>
            
              <a
                rel="noreferrer"
                href="https://www.facebook.com/OnGridIndia/"
                target="_blank"
              >
                <img
                  className="social-icons mx-2"
                  src="https://ongrid.in/images/home/facebook.png"
                  alt="insta"
                />
              </a>
              <a
                rel="noreferrer"
                href="https://twitter.com/On_grid"
                target="_blank"
              >
                <img
                  className="social-icons mx-2"
                  src="https://ongrid.in/images/home/twitter.png"
                  alt="insta"
                />
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/company/ongrid.in/?trk=top_nav_home"
                target="_blank"
              >
                <img
                  className="social-icons mx-2"
                  src="https://ongrid.in/images/home/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/ongrid_bgv/"
                target="_blank"
              >
                <img
                  className="social-icons mx-2"
                  id="insta-icon"
                  src="https://ongrid.in/images/home/instagram.png"
                  alt="insta"
                />
              </a>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
                <h5>Company</h5>
                <Link className="company-items" to="/aboutUs">About US</Link>
                <br/>
                <Link className="company-items" to="/career">Careers</Link>
                <br/>
                <Link className="company-items" to="/contact">Contact US</Link>
                <br/>
                <Link className="company-items" to="/blog">Our Blog</Link>
                <br/>
                <Link className="company-items" to="/tnc">Terms and Conditions</Link>
                <br/>
                <Link className="company-items" to="/privacyPolicy">Privacy Policy</Link>
            </div>
          </div>
          <hr/>
          <span>© {year} ONGRID - A brand of Handy Online Solutions Private Limited</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
