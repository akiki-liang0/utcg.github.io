import React, { Component } from 'react';

export class Cta extends Component {
    render() {
        return (
            <section className="cta-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="cta-content">
                        <span>Looking for more opportunities?</span>
					    <h2>Get Involved</h2>
                        <p>We are always looking for students to get involved. We are a student driven club, which means we need students to participate and help us by volunteering to help out during events. We welcome the support! Join the mailing list for more details about upcoming events and opportunities.</p>
                        <a href="../contact" className="btn btn-primary wow fadeInUp">Contact Us</a>
                    </div>
                </div>

                <div className="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape" />
                </div>
                <div className="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape" />
                </div>
                <div className="shape14 rotateme">
                    <img src={require("../../images/shapes/14.png")} alt="shape" />
                </div>
                <div className="shape15 rotateme">
                    <img src={require("../../images/shapes/15.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Cta;
