import React, {useState} from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

const BookDemo = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
 

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/signup", {name, email, phone})
      if(res && res.data.success){
        
      }
    } catch (error) {
      
    }
  }



  return (
    <div className="DemoPage">
      <div className="demobody">
        <div className="logo2">
          <Link to="/">
            <img
              className="demologo"
              src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png"
              alt="logo"
            />
          </Link>{" "}
        </div>{" "}
        <br />
        <div className="demohead">
          <div className="demoright">
            <div>
              <form className="formdatas" onSubmit={handleSubmit}>
                <div>
                  <label id="firstname-label" data-required="true">
                    <span>Name</span>
                  </label>
                  <br></br>
                  <input
                    className="forminput"
                    id="firstname-input"
                    type="text"
                    value=""
                    name="name"
                    required
                    placeholder="Please provide your name"
                    aria-invalid="false"
                    aria-required="true"
                  />
                </div>

                <label>Email id</label>
                <br />
                <input
                  className="forminput"
                  type="email"
                  placeholder="Provide your email id"
                  name="email"
                  required
                />
                <br />

                <label>Phone No</label>
                <br />
                <input
                  className="forminput"
                  type="tel"
                  placeholder="Provide your Phone number"
                  name="phone"
                  required
                />
                <br />
                {/* <PhoneInput  placeholder='Provide your Phone number'
                country={'india'}
              /><br /> */}
                <label>Organisation Name</label>
                <br />
                <input
                  className="forminput"
                  type="text"
                  placeholder="Provide Organisation"
                  name="organisation"
                  required
                />
                <br />
                <label>How did you learn about OnGrid</label>
                <br />
                <select className="forminput">
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="">Google</option>
                  <option value="">Linkedin</option>
                  <option value="">Ongrid article</option>
                  <option value="">Other</option>
                </select>
                <div></div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="demoleft">
          <div>
            <div className="text">
              <h1 className="white">
                Ensure HR compliance across organisation
              </h1>

              <ul>
                <li>
                  Clients can send invites to candidates for self registration
                  and creating their record, reducing HR/Ops work significantly.
                </li>
                <li>
                  Integration of the client user/customer onboarding system or
                  HRMS with OnGrid APIs.
                </li>
                <li>
                  Pick and choose from 50+ verifications and background checks
                  across staff categories.
                </li>
                <li>
                  Reduced TAT and cost of background verifications, basic
                  verification in less than 4 hours, including instant checks.
                </li>
                <li>
                  Employee onboarding, covering digital collection of data,
                  documents, and consent.
                </li>
                <li>Trusted by 2000+ clients.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="demodown">
        <h4>Incredible companies working with OnGrid</h4>
        <div className="demoimages">
          <div className="1"></div>
          <div className="2"></div>
          <div className="3"></div>
          <div className="4"></div>
          <div className="5"></div>
          <div className="6"></div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
