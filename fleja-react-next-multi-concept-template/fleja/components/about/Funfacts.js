import React, { Component } from 'react';

export class Funfacts extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-120 bg-38d16a">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="???">150</span></h3>
                                <p>Events Held</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="???">999</span></h3>
                                <p>Participants</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="???">?</span></h3>
                                <p>Creative Projects</p>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3><span className="odometer" data-count="54380">54380</span></h3>
                                <p>Lines of Code</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div class="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
			    <div class="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
            </section>
        );
    }
}

export default Funfacts;
