import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

export class BlogBody extends Component {
    render() {
        return (
            <section className="blog-section ptb-50">
                <div className="container">

                    {/* <div className="blog-items row"> */}
                    <Masonry
                        className={'blog-items row'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >

                    <div className="col-lg-4 col-md-6 grid-items">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/featured-event-image/siggraph.jpg")} alt="image" />
                                </a>

                                <div className="post-tag">
                                    <a href="#">Opportunity</a>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">9 Jan., 2020</span>
                                <h3><a href="#">SIGGRAPH 2020 Student Volunteer Info Session</a></h3>
                                <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 grid-items">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/featured-event-image/computer-graphics.jpg")} alt="image" />
                                </a>

                                <div className="post-tag">
                                    <a href="#">Graphics</a>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">12 Nov., 2019</span>
                                <h3><a href="#">Computer Graphics at Ubisoft</a></h3>
                                <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 grid-items">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/featured-event-image/vfx-startrek.jpg")} alt="image" />
                                </a>

                                <div className="post-tag">
                                    <a href="#">VFX</a>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">30 Oct., 2019</span>
                                <h3><a href="#">VFX Behind Star Trek</a></h3>
                                <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 grid-items">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/featured-event-image/job-fair.jpg")} alt="image" />
                                </a>

                                <div className="post-tag">
                                    <a href="#">Career</a>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">15 Oct., 2019</span>
                                <h3><a href="#">Computer Graphics Job Fair</a></h3>
                                <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 grid-items">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/featured-event-image/animation-festival-screening.jpg")} alt="image" />
                                </a>

                                <div className="post-tag">
                                    <a href="#">Animation</a>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">13 May., 2019</span>
                                <h3><a href="#">Computer Animation Festival Screening</a></h3>
                                <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 grid-items">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <a href="#">
                                    <img src={require("../../images/featured-event-image/cookie.jpg")} alt="image" />
                                </a>

                                <div className="post-tag">
                                    <a href="#">Entertainment</a>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">4 April, 2019</span>
                                <h3><a href="#">Bake Sale, Treats & Cookie Decoration</a></h3>
                                <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/autodesk-tour.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Tour</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">14 Mar., 2019</span>
                                    <h3><a href="#">Autodesk Office Tour</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/azure-vision.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">6 Mar., 2019</span>
                                    <h3><a href="#">Intro to Azure Custom Vision</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/shadertoy.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">20 Feb, 2019</span>
                                    <h3><a href="#">Shadertoy Tutorial</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/siggraph2.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Opportunity</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">23 Jan, 2019</span>
                                    <h3><a href="#">SIGGRAPH Student Volunteer Info Session</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/ux-design.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">26 Nov, 2018</span>
                                    <h3><a href="#">UX Design: UDesign X UTCG</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/holography.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">26 Oct, 2018</span>
                                    <h3><a href="#">Holography: The Art and Science of Holograms</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/handwriting-parser-workshop.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">6 Mar, 2018</span>
                                    <h3><a href="#">Computer Vision Workshop: Reading Handwritten Text</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/autodesk-tour.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">6 Feb, 2018</span>
                                    <h3><a href="#">Autodesk 3D Printing Demo & Tour</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/movie-night.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Entertainment</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">17 Nov, 2017</span>
                                    <h3><a href="#">UTCG Movie Night</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/research-talk.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Research</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">13 Oct, 2017</span>
                                    <h3><a href="#">UTCG Research Talk: Generalized Matryoshka</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/kickoff.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">25 Sep, 2017</span>
                                    <h3><a href="#">UTCG Kickoff Meeting + Hololens Demo</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/design-fabricate.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Research</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">4 Apr, 2017</span>
                                    <h3><a href="#">Research Talk by David Levin: Design & Fabrication by Example</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/pixar-story.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Entertainment</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">16 Feb, 2017</span>
                                    <h3><a href="#">UTCG The Pixar Story Movie Screening and Chat</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/photoshop-workshop.jpg")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Workshop</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">23 Jan, 2017</span>
                                    <h3><a href="#">Photoshop Workshop</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 grid-items">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <a href="#">
                                        <img src={require("../../images/featured-event-image/dgp-lab-tour.png")} alt="image" />
                                    </a>

                                    <div className="post-tag">
                                        <a href="#">Tour</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">29 Nov, 2016</span>
                                    <h3><a href="#">UTCG Dynamic Graphics Project (DGP) Lab Tour</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </Masonry>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogBody;
