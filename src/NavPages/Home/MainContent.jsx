import React from 'react'

const MainContent = () => {
  return (
    <>
        <div className="digi-trust text-center" style={{ color: "white" }}>
        <div className="digi-trust-content">
          <h1 className="my-3">DIGITAL TRUST PLATFORM</h1>
          Empowering employers and service providers through comprehensive
          identity and background
          <br />
          verifications for ensuring trust and accountability, and for achieving
          HR/ISO compliance.
          <br />
          <br />
          <button className="btn btn-start my-3">GET STARTED</button>
        </div>
      </div>
      <section id="onGridUsers">
        <div className="container text-center">
          <p className="longPara">
            Millions of people are a step away from entering the formal digital
            economy. They will need access to formal services such as jobs,
            education, healthcare, loans, insurance products, house/vehicle on
            rent, etc. This transformation is possible with employers and
            service providers being able to establish trust through identity and
            background verifications. OnGrid offers 50+ background checks, and
            also leverages a repository of verified information in a secure
            locker, with the consent of an individual, for achieving this.
          </p>
        </div>
      </section>
    </>
  )
}

export default MainContent