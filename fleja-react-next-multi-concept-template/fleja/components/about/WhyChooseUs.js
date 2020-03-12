import React, { Component } from 'react';

export class WhyChooseUs extends Component {
    render() {
        return (
            <section className="why-choose-us-area ptb-120">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="why-choose-us-img">
                                <img src={require("../../images/1.jpg")} className="front-img" alt="img" />
                                <img src={require("../../images/2.jpg")} className="back-img" alt="img" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="why-choose-us-content">
                                <div className="section-title">
                                    <span>Who Are We</span>
                                    <h2>Who Are We?</h2>
                                </div>
                                <p>University of Toronto Computer Graphics Club (UTCG) is a student driven club that aims to explore computer graphics from the computer science and artistic perspective. </p>

                                <p>Our mission is to create a supportive learning community that provides graphics-related workshops, research talks, field trips and social events for people who are interested in any part of computer graphics!</p>

                                <p>We want to create opportunities and resources for computer science students and anyone who is interested in similar fields.</p>
                                <a href="../team" className="btn btn-primary wow fadeInUp">Meet The Team</a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="why-choose-inner-area">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title">
                                    <h2>We like to find simple solutions to complex design requirements</h2>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon">
                                        <i className="icofont-handshake-deal"></i>
                                    </div>
                                    <h3>Digital Marketing</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore dolore magna aliqua.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon">
                                        <i className="icofont-brand-appstore"></i>
                                    </div>
                                    <h3>Market Analysis</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore dolore magna aliqua.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="single-box">
                                    <div className="icon">
                                        <i className="icofont-bullhorn"></i>
                                    </div>
                                    <h3>Brand Marketing</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo  maecenas accumsan lacus vel facilisis labore dolore magna aliqua.</p>
                                </div>
                            </div> */}
                        {/* </div>
                    </div> */}
                </div>

                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="circle-dot">
                    <img src={require("../../images/shapes/dot-shape1.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;
