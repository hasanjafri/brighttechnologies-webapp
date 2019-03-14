import React from 'react';

function Footer(props) {

    return(
        <React.Fragment>
          <footer className="page-footer blue darken-3">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Bright Technologies</h5>
                  <h6 className="white-text">Canada Office</h6>
                  <p className="grey-text text-lighten-4">
                    Zemlar Business Centre<br/>
                    55 Village Centre Pl, <br/>
                    Mississauga, ON, L4Z1V9 CA <br />
                    <a className="white-text" href="mailto:info@brighttechnologies.ca">info@brighttechnologies.ca</a>
                  </p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="/business-partners">Business Partners</a></li>
                    <li><a className="grey-text text-lighten-3" href="/news">News</a></li>
                    <li><a className="grey-text text-lighten-3" href="/contact-us">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container center-align">
              © 2019 Bright Technologies
              </div>
            </div>
          </footer>
        </React.Fragment>
    )
}

export default Footer;