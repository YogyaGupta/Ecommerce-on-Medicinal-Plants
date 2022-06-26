import React from "react";

const ContactInfo = () => {
  const emailHandler = () =>{
    window.location = "https://mail.google.com/mail/inbox?compose=new"
  }
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>95988434017</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt" onClick={() => {
                window.location = "https://www.google.com/maps/place/Jankipuram,+Lucknow,+Uttar+Pradesh+226021/@26.9240339,80.9424462,14.52z/data=!4m5!3m4!1s0x399957b75d9721a9:0x7b287d1599f1af94!8m2!3d26.9210215!4d80.9511835";
              }}></i>
            </div>
            <h5>Headquarter</h5>
            <p>Jankipuram Lucknow</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-envelope"  onClick={emailHandler}></i>
            </div>
            <h5>Mail Us</h5>
            <p>gyogya412@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
