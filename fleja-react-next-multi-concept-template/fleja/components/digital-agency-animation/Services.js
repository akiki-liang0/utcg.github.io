import React, { Component } from 'react';

export class Services extends Component {
    render() {
        return (
            <section className="welcome-services ptb-120 bg-38d16a">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">What do we do?</span>
                        <h2 className="wow fadeInDown">University of Toronto Computer Graphics Club</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-dart"></i>
                                </div>
                                <h3>Computer Graphics</h3>
                                <p>Information about CG events and workshops.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-handshake-deal"></i>
                                </div>
                                <h3>Projects</h3>
                                <p>Any projects the club has?</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>Career/Networking</h3>
                                <p>Infromation about Job fairs, conferences, etc.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn wow fadeInUp">
                                <a href="services-2.html" className="btn btn-primary">More Services</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
            </section>
        );
    }
}

export default Services;
