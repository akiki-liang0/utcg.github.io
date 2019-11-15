import React, { Component } from 'react';

export class Banner extends Component {
    render() {
        return (
            <div className="main-banner digital-agency-banner">
                <div id="scroll-down">
                    <span className="arrow-down"></span>
                    <span id="scroll-title">
                        Scroll down
                    </span>
                </div>

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1 className="wow fadeInUp">Welcome to UTCG!</h1>
                                        <p className="wow fadeInDown">The University of Toronto Computer Graphics Club has a mission is to create a supportive learning community that provides graphics-related workshops, research talks, field trips and social events for people who are interested in any part of computer graphics!</p>
                                        <a href="https://www.facebook.com/UTComputerGraphics/app/100265896690345/" target="_blank" className="btn btn-primary wow fadeInLeft">Add me to Mailing List</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-social-buttons">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/UTComputerGraphics">
                                <i className="icofont-facebook"></i>

                                <span>Facebook</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/utcomputergraphics">
                                <i className="icofont-instagram"></i>

                                <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="shape1">
                    <img src={require("../../images/shapes/cube_corner.png")} alt="shape" />
                </div>

                <div className="shape2">
                    <img src={require("../../images/shapes/corner_top_rt.png")} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require("../../images/shapes/corner_bot_left.png")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../images/shapes/cone_grey.png")} alt="shape" />
                </div>
                <div className="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
                <div class="shape7">
                    <img src={require("../../images/shapes/ring_cyan.png")} alt="shape" />
                </div>
                <div className="shape8">
                    <img src={require("../../images/shapes/teapot_grey.png")} alt="shape" />
                </div>
                <div className="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="circle-shape1">
                    <img src={require("../../images/shapes/bunny_grey.png")} alt="shape" className="w-150" />
                </div>
            </div>
        );
    }
}

export default Banner;
