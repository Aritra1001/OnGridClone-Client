import React from "react";

const Why = () => {
  // const ref= useRef(null);

  // const handelClick = ()=>{
  //   ref.current?.scrollIntoView({behaviour: 'smooth'})
  // }

  return (
    <>
      <div className="container text-center" id="why">
        <h1 style={{ fontSize: "36px" }}>Why OnGrid</h1>
        <div className="small-line"></div>
        <p className="mt-3 mb-5">
          OnGrid is the fastest growing ISO-certified digital platform for
          background verifications and checks, serving over 2000+ clients, and
          having run over 100 million checks. OnGrid's advanced methodologies
          and proprietary algorithms across 50+ checks brings what you are
          really expecting from your BGV partner - high efficacy and accuracy,
          lesser TAT, lesser cost, and hassle-free experience for HR/TA or
          operations managers running the verification process.
        </p>
      </div>
      <div className="container">
        <div
          className="row"
          style={{ color: "#fff", padding: 0, margin: 0, marginBottom: "10px" }}
        >
          <div className="col-md-4">
            <div className="item-1" id="cutting-edge">
              <img
                src="https://ongrid.in/images/home/leverage.png"
                alt="item"
                style={{ width: "33px" }}
              />
              <br />
              <b>Cutting edge approach</b>
              <ul className="bulletPoint">
                <li>State-of-art portal and APIs</li>
                <li>Pick and choose checks</li>
                <li>Digital candidate file created for compliance and audit</li>
                <li>Multi-modal information exchange options</li>
                <li>Multi-modal consent options</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item-2" id="comprehension">
              <b>
                Comprehensive and Customizable
                <br />
                Verification Solutions
              </b>
              <ul className="bulletPoint">
                <li>ID and address verification</li>
                <li>Education and Employment verification</li>
                <li>Reference Checks</li>
                <li>Police and Court record verification</li>
                <li>Global database checks, credits checks</li>
                <li>CV validation, eLockr reference checks</li>
                <li>Another 40+ checks to choose from</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item-3" id="carousel-1"></div>
          </div>
        </div>
        <div
          className="row"
          style={{ color: "#fff", padding: 0, margin: 0, marginBottom: "10px" }}
        >
          <div className="col-md-3">
            <div className="row">
              <div className="item-4 " id="carousel-2"></div>
            </div>
            <div className="row">
              <div className="item-5 my-2">
                <img
                  src="https://ongrid.in/images/home/integrate.png"
                  alt="item-5"
                  style={{ width: "33px" }}
                />
                <br />
                <b>Partner of choice, fastest to reach</b>
                <ul className="bulletPoint">
                  <li>10 million+ people verified</li>
                  <li>100 million+ checks conducted</li>
                  <li>2000+ happy clients</li>
                  <li>50+ configurable offerings</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item-6" id="carousel-3"></div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12 item-7">
                <img
                  src="https://ongrid.in/images/home/crowdSourced.png"
                  alt="item-7"
                  style={{ width: "33px", height: "30px" }}
                />
                <br />
                <b>Asset-reuse</b>
                <ul className="bulletPoint">
                  <li>
                    Allows candidate to provide electronic consent to an
                    employer or service provider to access her/his information,
                    documents, verification reports, and references
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 item-8">
                <img src="https://ongrid.in/images/home/access.png" alt="item-8" style={{width: "33px", height: "30px"}}/>
                <br/>
                <b>Access, Wherever, However</b>
                <br/>
                <ul className="bulletPoint">
                  <li>Unlimited organization users</li>
                  <li>Intuitive portal access for real time verification updates</li>
                  <li>Configure reports - who gets them, which reports, how frequently</li>
                  <li>APIs for integrating with onboarding systems and HRMS 12X6 email and call support</li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="item-9" id="carousel-4">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
