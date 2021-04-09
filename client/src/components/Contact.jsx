import React from "react";
import emailjs from "emailjs-com";
import apikeys from "../apikeys";

const onSubmit = (e) => {
  e.preventDefault(); // Prevents default refresh by the browser
  emailjs
    .sendForm("gmail", apikeys.TEMPLATE_ID, e.target, apikeys.USER_ID)
    .then(
      (result) => {
        alert("Message Sent, I'll get back to you shortly", result.text);
      },
      (error) => {
        alert("An error occured, Plese try again", error.text);
      }
    );
};

function Contact(props) {
  return (
    <div className="jumbotron jumbotron-fluid jumbotron-main" id="jumbotron-id">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 ">
            <div className="intro">
              <h1 className="left-heading">{props.mainTitle}</h1>
              <p className="home-para">{props.mainPara}</p>
              <form onSubmit={onSubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="from_email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Your Name</label>
                  <input
                    name="from_name"
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Your Message</label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-dark">
                  Send Email
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-6 img-fluid mb-4">
            <img src={props.imgLink} class="img-fluid" alt="Responsive image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
