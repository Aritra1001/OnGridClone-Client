import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  BsFillTelephoneInboundFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { RiUserSearchFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import "./FootPages.css";

const Contact = () => {
  return (
    <Layout>
      <section
        className="about-header"
        id="career-img"
        style={{ boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)" }}
      >
        <h1>Contact US</h1>
      </section>
      <section>
        <div className="container my-4">
          <div className="row">
            <div
              className="col-md-7 login-form text-center"
              style={{ height: "80vh" }}
            >
              <h3 className="my-2">
                Business Enquiry? Bugs? Catch up for tea?
              </h3>
              <form className=" my-3" style={{ height: "70vh" }}>
                <div className="input-field">
                  <label>Name*</label>
                  <input
                    className="forminput my-3"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <br />
                <br/>
                <div className="input-field">
                  <label>Email*</label>
                  <input
                    className="forminput my-3"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <br />
                <br/>
                <div className="input-field">
                  <label>Phone*</label>
                  <input
                    className="forminput my-3"
                    type="text"
                    name="phone"
                    required
                  />
                </div>
                <br />
                <br/>
                <div className="input-field">
                  <label>Please enter your query here*</label>
                  <input
                    className="forminput my-3"
                    type="text"
                    name="query"
                    required
                  />
                </div>
                <br />
                <br/>
                <button className="btn contact-btn my-2">SUBMIT</button>
              </form>
            </div>
            <div className="col-md-5 address-container text-left my-3">
              <h3>Address</h3>
              <h5>Handy Online Solutions Private Limited</h5>
              <span>ThinkPlus, 18B, Institutional Area</span>
              <br />
              <span>
                Opposite Eli Lilly and Company
                <br />
                Sector 32, Gurugram, Haryana - 122003
              </span>
              <div className="contact-details my-2">
                <span>
                  <BsFillTelephoneInboundFill
                    className="mx-2"
                    style={{ height: "1.2em", width: "1.2em", opacity: "0.7" }}
                  />
                  <a className="mx-3" href="tel:+91 80470 94800">
                    080470 94800
                  </a>
                </span>
                <br />
                <span>
                  <RiUserSearchFill
                    className="mx-2"
                    style={{ height: "1.3em", width: "1.3em", opacity: "0.7" }}
                  />
                  <span className="mx-3">
                    Business Enquiries -{" "}
                    <a href="mailto:partner@ongrid.in">partner@ongrid.in</a>
                  </span>
                </span>
                <br />
                <span>
                  <MdSupportAgent
                    className="mx-2"
                    style={{ height: "1.3em", width: "1.3em", opacity: "0.7" }}
                  />
                  <span className="mx-3">
                    Platform Support -{" "}
                    <a href="mailto:support@ongrid.in">support@ongrid.in</a>
                  </span>
                </span>
                <br />
                <span>
                  <BsFillBriefcaseFill
                    className="mx-2"
                    style={{ height: "1.3em", width: "1.3em", opacity: "0.7" }}
                  />
                  <span className="mx-3">
                    Apply to onGrid -{" "}
                    <a href="mailto:careers@ongrid.in">careers@ongrid.in</a>
                  </span>
                </span>
                <br />
                <span>
                  <FaThumbsUp
                    className="mx-2"
                    style={{ height: "1.3em", width: "1.3em", opacity: "0.7" }}
                  />
                  <span className="mx-3">
                    Feedback -{" "}
                    <a href="mailto:feedback@ongrid.in">feedback@ongrid.in</a>
                  </span>
                </span>
              </div>
              <div className="mapbox text-center">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.046392054387!2d77.03733517523426!3d28.448017875766055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1872871970cd%3A0x29a35131333be0ed!2sOnGrid%20-%20Background%20verification%20platform!5e0!3m2!1sen!2sin!4v1686990981223!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
