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
                                        <img src={require("../../images/featured-event-image/siggraph.jpg")} alt="man" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1>Featured Event: </h1>
                                        <br />
                                        <h1 className="wow fadeInUp">Siggraph Student Volunteer Information Session</h1>
                                        <ul className="wow fadeInDown">
                                            <li><a href="#" className="facebook"><i className="icofont-facebook"></i></a></li>
                                        </ul>
                                        <p> Want to get involved with the most
                                        important technical Computer Graphics conference
                                        in the world? Hoping to find a career or meet
                                        people involved with VFX, tooling, animation,
                                        gaming and entertainment industries? The SIGGRAPH
                                         2020 Conference will be waiting for you in
                                         Washington, DC this summer!
                                        </p>
                                        <a href="/freelancer-portfolio-animation" className="btn btn-primary wow fadeInUp">More Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shape1">

                </div>
                <div class="shape2">

                </div>
                <div class="shape3">

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
