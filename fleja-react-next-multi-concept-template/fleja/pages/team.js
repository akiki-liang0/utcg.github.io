import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import VolunteersHeading from '../components/digital-agency-animation/VolunteersHeading';
import Footer from '../components/layout/Footer';
import Team from '../components/digital-agency-animation/Team';
import Volunteers from '../components/digital-agency-animation/Volunteers';
export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Meet The Team</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                    <div className="shape1">
                        <img src={require("../images/shapes/cube_corner.png")} alt="shape" />
                    </div>
                    <div className="shape2">
                        <img src={require("../images/shapes/corner_top_rt.png")} alt="shape" />
                    </div>
                    <div className="shape3">
                        <img src={require("../images/shapes/corner_bot_left.png")} alt="shape" />
                    </div>
                </div>

                <Team />
                <VolunteersHeading />
                <Volunteers />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
