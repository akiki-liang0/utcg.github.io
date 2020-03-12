import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';

export class Navbar extends Component {
    _isMounted = false;

    state = {
        drawer: false,
        searchForm: false,
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    handleDrawer = () => {
        this.setState( prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        let { pathname } = this.props.router;
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        let layOutCls = '';
        if (pathname == '/creative-blog'){
            layOutCls = 'p-relative';
        }

        return (
            <header id="header">
                <div id="navbar" className={`artflex-nav ${layOutCls}`}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/home">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <img src={require("../../images/nav_menu_icon.png")}/>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    {/*<li className="nav-item"><a href="#" className="nav-link">Template Stuff <i className="icofont-simple-down"></i></a>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/error">
                                                    <a className="nav-link">_error</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/about-us">
                                                    <a className="nav-link">about-us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>*/}

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/home">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                      <Link activeClassName="active" href="/events">
                                            <a className="nav-link">Events</a>
                                      </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/team">
                                            <a className="nav-link">Team</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/agency-portfolio">
                                            <a className="nav-link">Gallery</a>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                    {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} /> */}
                    {/* <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(Navbar));
