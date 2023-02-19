import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section data-aos="fade" data-aos-duration="1000" id="Contact">
      <h2>Let's Connect!</h2>

      <div className="contact-desc">
        <p>
         I am currently available for new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll always get back to you!
        </p>
      </div>

      <div className="contact_email">
        <a href="mailto:samsonaderonmu2021@gmail.com" id="contactme">
          Contact Me
        </a>
      </div>

      <div className="footer">
        <p>
           <span>Samson Aderonmu</span>
        </p>
    
      </div>
    </section>
  );
};

export default Contact;
