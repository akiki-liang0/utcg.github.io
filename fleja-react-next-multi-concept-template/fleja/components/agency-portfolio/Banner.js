import React, { Component } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    dots:true,
    smartSpeed: 2000,
    animateOut: 'slideOutDown',
    autoplayHoverPause:true,
    animateIn: 'fadeInUp',
    items:1,
    autoplay:true,
    navText: [
        "<i class='icofont-arrow-left'></i>",
        "<i class='icofont-arrow-right'></i>"
    ]
}

export class Banner extends Component {

    state = {
        display: false
    }

    componentDidMount(){
        this.setState({ display: true })
    }

    render() {
        return (
            <React.Fragment>
            {this.state.display ? <OwlCarousel
                className="home-slides agency-portfolio-home owl-carousel owl-theme"
                {...options}
            >
                <div className="main-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="col-lg-12">
                                                <div className="hero-content">
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInDown" : ''
                                                        }
                                                    >
                                                        Image Gallery
                                                    </h1>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
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
                </div>
                </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default Banner;
