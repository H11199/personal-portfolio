import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p className="footer-text">&copy; 2021 Himanshu sharma.</p>
          </div>

          <div className="col-sm-6">
            <div className="social-media">
              <span className="margin-right instagram">
                <a
                  href="https://www.instagram.com/thecodeman202/"
                  target="blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </span>
              <span className="margin-right linkedin">
                <a
                  href="https://www.linkedin.com/in/himanshu-sharma-237973198/"
                  target="blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </span>
              <span className="margin-right twitter">
                <a href="https://twitter.com/Himansh19211107" target="blank">
                  <i className="fab fa-twitter" />
                </a>
              </span>
              <span className="margin-right github">
                <a href="https://github.com/H11199" target="blank">
                  <i className="fab fa-github" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
