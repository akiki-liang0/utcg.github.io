import React, { Component } from 'react';

export class Cta extends Component {
    render() {
        return (
            <section className="cta-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="cta-content">
                        <span className="wow fadeInUp">Get In Touch</span>
					    <h2 className="wow fadeInDown">Want to work with us? Let's talk!</h2>
                        <p>Are you a representative of your company or orginization looking to work with UTCG? Do you want to suggest an event? Email us below.</p>
                        <a href="#" className="btn btn-primary wow fadeInUp">Contact Us</a>
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
