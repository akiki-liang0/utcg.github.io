import React, { Component } from 'react';
import Link from 'next/link';

export class Banner extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src={require("../../images/featured-event-image/the-midway.jpg")} alt="man" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1 className="wow fadeInUp">The Midway: <br />  A VFX Breakdown</h1>
                                        <ul className="wow fadeInDown">
                                            <li><a href="https://www.facebook.com/events/234280584373323/" target="_blank" className="facebook"><i className="icofont-facebook"></i></a></li>
                                        </ul>
                                        <p>Date: Thursday March 9th <br/>
                                        Time: 6pm-9pm <br/>
                                        Location: BA1210, Bahen Centre for Information Technology
                                        <br/>
                                        <br/>
                                        The Midway's computer graphics supervisor, Evgeny (Johny) Berbasov, is visiting U of T to talk about the incredible VFX work that went into creating the film!

The event will also be followed by a talk by Jos Stam!
                                        </p>
                                        <a href="http://bit.ly/2WbNKRV" target="_blank" className="btn btn-primary wow fadeInUp">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shape1">
                    <img src={require("../../images/shapes/cube_corner.png")} alt="shape" />
                </div>
                <div class="shape2">
                    <img src={require("../../images/shapes/corner_top_rt.png")} alt="shape" />
                </div>
                <div class="shape3">
                    <img src={require("../../images/shapes/corner_bot_left.png")} alt="shape" />
                </div>
                <div class="shape4">
                    <img src={require("../../images/shapes/4.png")} alt="shape" />
                </div>
                <div class="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape" />
                </div>
                <div class="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
                <div class="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape" />
                </div>
                <div class="shape8">
                    <img src={require("../../images/shapes/8.png")} alt="shape" />
                </div>
                <div class="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape" />
                </div>
                <div class="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>


                <div className="circle-shape1">
                    <img src={require("../../images/shapes/circle1.png")} alt="shape" />
                </div>
                <div className="circle-shape2">
                    <img src={require("../../images/shapes/circle2.png")} alt="shape" />
                </div>
                <div className="circle-shape3">
                    <img src={require("../../images/shapes/circle3.png")} alt="shape" />
                </div>
            </div>
        );
    }
}

export default Banner;
