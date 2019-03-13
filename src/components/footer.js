import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {

    return(
        <React.Fragment>
          <footer class="page-footer blue darken-3">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Bright Technologies</h5>
                  <h6 class="white-text">Canada Office</h6>
                  <p class="grey-text text-lighten-4">
                    Zemlar Business Centre<br/>
                    55 Village Centre Pl, <br/>
                    Mississauga, ON, L4Z1V9 CA <br />
                    <a className="white-text" href="mailto:info@brighttechnologies.ca">info@brighttechnologies.ca</a>
                  </p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Links</h5>
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
                    <li><a class="grey-text text-lighten-3" href="/business-partners">Business Partners</a></li>
                    <li><a class="grey-text text-lighten-3" href="/news">News</a></li>
                    <li><a class="grey-text text-lighten-3" href="/contact-us">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container center-align">
              © 2019 Bright Technologies
              </div>
            </div>
          </footer>
        </React.Fragment>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Footer;