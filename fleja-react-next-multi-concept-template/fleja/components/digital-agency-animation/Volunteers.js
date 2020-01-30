import React, { Component } from 'react';

export class Team extends Component {
    render() {
        return (
            <section className="team-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">Team Members</span>
                        <h2 className="wow fadeInDown">UTCG Executive Members</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/1.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Firstname Lastname</h3>
                                    <span>___ Volunteer</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="shape2">
                    <img src={require("../../images/shapes/2.png")} alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Team;
