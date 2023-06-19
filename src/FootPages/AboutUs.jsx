import React from "react";
import Layout from "../Components/Layout/Layout";
import "./FootPages.css";

const AboutUs = () => {
  return (
    <Layout>
      <div id="aboutUs">
        <section
          className="about-header"
          style={{ boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)" }}
        >
          <h1>About US!</h1>
        </section>
      </div>
      <section>
        <div
          className="container  about-container"
          style={{ padding: "30px 0 40px 0" }}
        >
          <div className="row">
            <div
              className=" col-md-8 text-center about-cont-1 "
              style={{ width: "75%" }}
            >
              <h3 className="my-2">How it all began</h3>
              <span className="my-2" style={{ color: "#44484a" }}>
                OnGrid was established in 2015 with the vision of catalyzing
                trust and accountability in communities with a trust deficit.
                Our philosophy is to enable individuals and organizations to
                engage in a frictionless manner in a high-trust environment by
                facilitating data-driven decisions that go beyond fact-checking.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "30px 0", backgroundColor: "#f1f1f1" }}>
        <div className="container ">
          <div className="row">
            <div
              className="col-md-8 text-center about-cont-1"
              style={{ width: "75%" }}
            >
              <h3>Where we are</h3>
              <p>
                OnGrid is a reputed name in the space of trust establishment via
                background verification and checks, having served over 2000+
                clients across multiple industries, and having completed over
                100 million checks. We continue to grow at a rapid pace, as we
                introduce new solutions such as{" "}
                <a href="https://elockr.io/#/" target="_blank" rel="noreferrer">
                  eLockr
                </a>{" "}
                and <b>Gridlines</b> for making trust establishment and
                verifications faster, cheaper, and more accurate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container  about-container"
          style={{ padding: "30px 0 40px 0" }}
        >
          <div className="row">
            <div
              className=" col-md-8 text-center about-cont-1 "
              style={{ width: "75%" }}
            >
              <h3 className="my-2">Our team</h3>
              <p className="my-2" style={{ color: "#44484a" }}>
                Our team comprises of passionate people across engineering,
                product management, operations, business development and account
                management, who are committed to solving the trust-deficit
                problem in a manner that is elegant, and easy to adopt for our
                clients. We are a team of 200+ full-time employees and 1000+
                contractual field verifiers. We are constantly hiring, and if
                you wish to be a part of our team, give us a shout at{" "}
                <a href="mailto:careers@ongrid.in">careers@ongrid.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "30px 0", backgroundColor: "#f1f1f1" }}>
        <div className="container ">
          <div className="row">
            <div
              className="col-md-8 text-center about-cont-1"
              style={{ width: "75%" }}
            >
              <h3>Our core values</h3>
              <p>
                1. Be the gatekeepers to authenticity, and protect the truth.
                <br />
                2. Creating a fair working world, devoid of fraud.
                <br />
                3. Empower the less privileged to achieve upward mobility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
