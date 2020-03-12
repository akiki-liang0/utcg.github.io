import React, { Component } from 'react';

export class AboutUsArea extends Component {
    render() {
        return (
            <section className="about-us-area ptb-120">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-8">
                            <div className="about-us-content">
                                <div className="section-title">
                                    <h2>What We Do</h2>
                                </div>
                                {/* <p>We </p> */}

                                <div className="row m-0">
                                    <div className="col-lg-6 col-md-6 col-sm-6 pr-3 pl-0">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-dart"></i>
                                            </div>
                                            <h3>Our Mission</h3>
                                            <p>Our mission is to create a supportive learning community for people who are interested in any part of computer graphics!</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 pr-0 pl-3">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-briefcase"></i>
                                            </div>
                                            <h3>What We Do / Services?</h3>
                                            <p>We provide graphics-related workshops, research talks, field trips and social events.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 pr-3 pl-0">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-laptop"></i>
                                            </div>
                                            <h3>Discover</h3>
                                            <p>Discover interests you never knew you had and learn more about Computer Graphics through our exciting workshops and events.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 pr-0 pl-3">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="icofont-handshake-deal"></i>
                                            </div>
                                            <h3>Meet</h3>
                                            <p>Come to our social events and meet Employers, Innovators, Professors and other graphics-loving students to develop key connections.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="about-us-image">
                                <img src={require("../../images/about2.jpg")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsArea;
