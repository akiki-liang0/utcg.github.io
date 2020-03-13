import React, { Component } from 'react';
import Link from 'next/link';

export class Contact extends Component {
    render() {
        return (
            <section className="contact-cta-area ptb-120">s
                <div className="container">
                    <div className="contact-cta-content">
                        <div className="section-title">
                            <span className="wow fadeInUp">Get in Touch</span>
                            <h2 className="wow fadeInDown">Want to work with us? Chat with us!</h2>
                        </div>

                        <p>UTCG works has worked with countless graphics, software, development companies to bring workshops, job fairs, research talks, and much more to the students of U of T, as well as those outside.</p>
                            <a href="mailto:utcomputergraphics@gmail.com" className="btn btn-primary wow fadeInUp">Contact Us</a>
                    </div>
                </div>

                <div className="shape13">
                    <img src={require("../../images/shapes/13.png")} alt="shape" />
                </div>
                <div className="shape18">
                    <img src={require("../../images/shapes/18.png")} alt="shape" />
                </div>
                <div className="shape19">
                    <img src={require("../../images/shapes/19.png")} alt="shape" />
                </div>
                <div className="shape20 rotateme">
                    <img src={require("../../images/shapes/20.png")} alt="shape" />
                </div>
                <div className="shape21">
                    <img src={require("../../images/shapes/21.png")} alt="shape" />
                </div>
                <div className="shape22">
                    <img src={require("../../images/shapes/22.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Contact;
