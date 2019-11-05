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
                            <Link href="/digital-agency">
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
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"><a href="#" className="nav-link">Home <i className="icofont-simple-down"></i></a>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/digital-agency">
                                                    <a className="nav-link">Digital Agency</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/freelancer">
                                                    <a className="nav-link">Freelancer Portfolio </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/startup-agency">
                                                    <a className="nav-link">Startup Agency</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/agency-portfolio">
                                                    <a className="nav-link">Agency Portfolio</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/creative-blog">
                                                    <a className="nav-link">Creative Blog</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/digital-agency-animation">
                                                    <a className="nav-link">Digital Agency Animation</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/freelancer-portfolio-animation">
                                                    <a className="nav-link">Freelancer Portfolio Animation</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/startup-agency-animation">
                                                    <a className="nav-link">Startup Agency Animation</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
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