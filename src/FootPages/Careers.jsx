import React from "react";
import Layout from "../Components/Layout/Layout";
import "./FootPages.css";

const Careers = () => {
  return (
    <Layout>
      <section
        className="about-header"
        id="career-img"
        style={{ boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)" }}
      >
        <h1>Brighten Your Future!</h1>
      </section>
      <div className="career-content">
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
                <h3 className="my-2">Explore opportunities with us!</h3>
                <span className="my-2" style={{ color: "#44484a" }}>
                  We are a team of individuals with diverse backgrounds and
                  expertise, all driven with a common purpose of enabling secure
                  and digital transactions in a modern and growing India, with
                  an opportunity to help millions of Indians access services
                  easily, meet their aspirations, and provide upward mobility in
                  society. All playing different yet significant roles, all
                  working fervently towards creating better user experiences,
                  all driven with a thirst for innovation. And in that dynamic,
                  fast-paced community is a cornucopia of opportunities, for
                  you. Pick a team, find your opportunity and get in touch with
                  us.
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
                <h3>Current Openings</h3>
                <p style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                  Currently, there are no open positions.
                </p>
                <p>
                  However, please write to OnGrid with your profile if you are
                  interested to be a part of the OnGrid journey.
                </p>
                <div className="send-cv my-2 mx-4">
                  <h3 className="send-cv-content">
                    Send your CV to{" "}
                    <a href="mailto:partner@ongrid.in">partner@ongrid.in</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Careers;
