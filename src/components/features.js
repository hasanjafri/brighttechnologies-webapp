import React from 'react';

const Features = () => {
  return (
    <section id="features" className="grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="col m6 center-align">
            <h2>Why Us?</h2>
            <p>Discover Our Expertise</p>
          </div>
          <div className="col m3"></div>
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">create</i>
            <h5>Co-Innovation</h5>
            <p>We listen to our customers and work with them to create a better future on our Digital Business Platform—together.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">devices</i>
            <h5>Customer-Centricity</h5>
            <p>Our customers' success is our success. We put customers first. Always.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">build</i>
            <h5>Passion</h5>
            <p>We are excited about customer success—and it shows.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">mood</i>
            <h5>Relevance</h5>
            <p>We help customers achieve results that exceed their expectations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;