import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Banner from '../components/freelancer-portfolio-animation/Banner';
import Features from '../components/freelancer-portfolio-animation/Features';
import About from '../components/freelancer-portfolio-animation/About';
import Services from '../components/freelancer-portfolio-animation/Services';
import Cta from '../components/freelancer-portfolio-animation/Cta';
import Skills from '../components/freelancer-portfolio-animation/Skills';
import Funfacts from '../components/freelancer-portfolio-animation/Funfacts';
import Works from '../components/freelancer-portfolio-animation/Works';
import Feedback from '../components/freelancer-portfolio-animation/Feedback';
import Blog from '../components/freelancer-portfolio-animation/Blog';
import BigCalendarComponent from '../components/freelancer-portfolio-animation/BigCalendarComponent';
import PastEvents from '../components/freelancer-portfolio-animation/PastEvents';
import CalendarHeading from '../components/freelancer-portfolio-animation/CalendarHeading';
import PastEventsHeading from '../components/freelancer-portfolio-animation/PastEventsHeading';
import Partner from '../components/digital-agency-animation/Partner';
export class index extends Component {

    componentDidMount(){
        this.setState({ display: true });
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <CalendarHeading />
                <BigCalendarComponent />
                <PastEventsHeading />
                <PastEvents />
                <Cta />
                <Partner />
                <Footer />


            </React.Fragment>
        );
    }
}

export default index;
