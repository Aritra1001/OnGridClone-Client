import React from "react";
import Layout from "../../Components/Layout/Layout";

const Faq = () => {
  return (
    <Layout>
      <section
        id="faq-header"
        style={{ boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)" }}
      >
        <h1>Frequently Asked Questions (FAQs)</h1>
      </section>
      <div className="container questions-head">
        <h4 className="my-3">FAQs by client organizations</h4>
      </div>
      <section id="question-set-1">
        <ul class="dropdown-menu">
          <li>
            <span class="dropdown-item-text">Dropdown item text</span>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Something else here
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Faq;
