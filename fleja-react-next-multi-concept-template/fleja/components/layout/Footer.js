import React, { Component } from 'react';

// The event descriptions that go in the 'Recent Post' column of the footer
const recentEvents = [
    {
        eventLink: "https://www.facebook.com/events/1839793892820474/",
        eventTitle: "The VFX Behind the Mandalorian",
        eventDate: "31 Jan 2020"
    },
    {
        eventLink: "https://www.facebook.com/events/568018043769485/",
        eventTitle: "SIGGRAPH Student Volunteer Info Session",
        eventDate: "9 Jan 2020"
    },
    {
        eventLink: "https://www.facebook.com/events/690040014820484/",
        eventTitle: "Computer Graphics at Ubisoft",
        eventDate: "12 Nov 2019"
    }
];

// The links that go in the 'Quick Links' column of the footer
const quickLinks = [
    {
        title: "Home",
        linkTo: "/home"
    },
    {
        title: "About",
        linkTo: "/about-us"
    },
    {
        title: "Events",
        linkTo: "/freelancer-portfolio-animation"
    },
    {
        title: "Team",
        linkTo: "/team"
    },
    {
        title: "Contact",
        linkTo: "/contact"
    }
];

export class Footer extends Component {
    render() {
        return (
            <footer className="footer-area ptb-120 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={require("../../images/logo_white.png")} alt="logo" />
                                    </a>
                                </div>
                                <p>Here are some links to some things you might be interested in.</p>

                                <ul className="social-links">
                                    <li><a href="https://www.facebook.com/UTComputerGraphics" target="_blank"><i className="icofont-facebook"></i></a></li>
                                    {/* <li><a href="#"><i className="icofont-twitter"></i></a></li> */}
                                    <li><a href="https://www.instagram.com/utcomputergraphics/" target="_blank"><i className="icofont-instagram"></i></a></li>
                                    {/* <li><a href="#"><i className="icofont-pinterest"></i></a></li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget ml-4">
                                <h3>Quick Links</h3>

                                <ul className="list">
                                    {quickLinks &&
                                        quickLinks.map((qlink, idx) => (
                                            <li key={`footer-quick-links-${idx}`}>
                                                <a href={`${qlink.linkTo}`}>{qlink.title}</a>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Recent Post</h3>

                                <ul className="footer-recent-post">
                                    {recentEvents &&
                                        recentEvents.map((revent, idx) => (
                                           <li key={`footer-recent-events-${idx}`}>
                                                <a href={`${revent.eventLink}`}>{revent.eventTitle}</a>
                                                <span>{revent.eventDate}</span>
                                           </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Get in Touch</h3>

                                <p>If you would like to contact us feel free to email us here or go to our Facebook/Instagram page!</p>

                                <ul className="footer-contact-info">
                                    {/* <li>
                                        <i className="icofont-google-map"></i>
                                        <span>Location:</span>
                                        27 Division St, New York, NY 10002, USA
                                    </li>

                                    <li>
                                        <i className="icofont-phone"></i>
                                        <span>Phone:</span>
                                        <a href="#">+44 014799584</a>
                                    </li> */}

                                    <li>
                                        <i className="icofont-email"></i>
                                        {/* <span>Email:</span> */}
                                        <a href="mailto:utcomputergraphics@gmail.com">utcomputergraphics@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @2019. All rights reserved.</p>
                            </div>

                            {/* <div className="col-lg-6 col-md-6 text-right"> */}
                                {/* <p>Design & Developed by <a href="https://envytheme.com" target="_blank">EnvyTheme</a></p> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <img src={require("../../images/line-bg.png")} className="line-bg" alt="line-bg" />
                <div className="shape23">
                    <img src={require("../../images/shapes/23.png")} alt="shape" />
                </div>
                <div className="shape24">
                    <img src={require("../../images/shapes/24.png")} alt="shape" />
                </div>
                <div className="shape27">
                    <img src={require("../../images/shapes/27.png")} alt="shape" />
                </div>
            </footer>
        );
    }
}

export default Footer;
