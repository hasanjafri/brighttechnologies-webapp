import React from 'react';
import ExemplarImg from '../assets/images/exemplarimg.jpeg';

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div className="col l1"></div>
          <div className="col l10 center-align">
            <h1>Mission</h1>
            <p>The mission of BT to assist client managers and administrators to contain cost and value-added revenue while maintaining high performance standards.
            Our mission is to enhance the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and reliable competitive advantage for our clients around the world.
            BT have extensive experience and IP that we can apply to your business to improve your productivity and reduce cost. BT has a strong focus on quality and simplicity.</p> <br/>
            <img className="responsive-img" alt='dataExemplarImg' src={ExemplarImg} />.
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default Exemplar;