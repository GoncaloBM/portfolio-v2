import React from "react";
import "./ContactSection.css";

export const ContactSection = React.forwardRef((props, ref) => {
  return (
    <div className="contact-section" ref={ref}>
      <div className="contact-box">
        <div className="contact-title">Contact me</div>
      </div>
    </div>
  );
});
