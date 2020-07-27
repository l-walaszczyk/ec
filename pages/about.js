import React from "react";
import Layout from "../layouts/Layout";
import Button from "../components/Button";
import texts from "../public/content/texts";

const About = () => {
  return (
    <Layout>
      <main>
        <section className="about-full">
          {/* <div className="text-container"> */}
          <h3>Mgr Emilia Cwojdzińska</h3>
          {/* </div> */}
          <hr />
          <div className="about-wrap">
            <div className="text-container">{texts.about.about}</div>
            <div className="img-container">
              <img src="/images/certificate_small.jpg" alt="" />
              {texts.about.caption}
            </div>
          </div>
        </section>
        <section className="see-also">
          <h3>Zapraszam do zapoznania się z ofertą:</h3>
          <div className="button-container">
            <Button to="/services1">{texts.services.titles.one}</Button>
            <Button to="/services2">{texts.services.titles.two}</Button>
            <Button to="/services3">{texts.services.titles.three}</Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
