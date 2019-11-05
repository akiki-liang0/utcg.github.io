webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/layout/Navbar.js ***!
  \*************************************/
/*! exports provided: Navbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SearchForm */ "./components/layout/SearchForm.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SideDrawer */ "./components/layout/SideDrawer.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDrawer", function () {
      _this.setState(function (prevState) {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var pathname = this.props.router.pathname;
      var products = this.props.products;
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      var layOutCls = '';

      if (pathname == '/creative-blog') {
        layOutCls = 'p-relative';
      }

      return __jsx("header", {
        id: "header"
      }, __jsx("div", {
        id: "navbar",
        className: "artflex-nav ".concat(layOutCls)
      }, __jsx("div", {
        className: "container"
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/digital-agency"
      }, __jsx("a", {
        className: "navbar-brand"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
        alt: "logo"
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, __jsx("span", {
        className: "navbar-toggler-icon"
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, __jsx("ul", {
        className: "navbar-nav ml-auto"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx("a", {
        href: "#",
        className: "nav-link"
      }, "Home ", __jsx("i", {
        className: "icofont-simple-down"
      })), __jsx("ul", {
        className: "dropdown_menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/digital-agency"
      }, __jsx("a", {
        className: "nav-link"
      }, "Digital Agency"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/freelancer"
      }, __jsx("a", {
        className: "nav-link"
      }, "Freelancer Portfolio "))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/startup-agency"
      }, __jsx("a", {
        className: "nav-link"
      }, "Startup Agency"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/agency-portfolio"
      }, __jsx("a", {
        className: "nav-link"
      }, "Agency Portfolio"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/creative-blog"
      }, __jsx("a", {
        className: "nav-link"
      }, "Creative Blog"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/digital-agency-animation"
      }, __jsx("a", {
        className: "nav-link"
      }, "Digital Agency Animation"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/freelancer-portfolio-animation"
      }, __jsx("a", {
        className: "nav-link"
      }, "Freelancer Portfolio Animation"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/startup-agency-animation"
      }, __jsx("a", {
        className: "nav-link"
      }, "Startup Agency Animation"))))), __jsx("li", {
        className: "nav-item"
      }, __jsx("a", {
        href: "#",
        className: "nav-link"
      }, "Pages ", __jsx("i", {
        className: "icofont-simple-down"
      })), __jsx("ul", {
        className: "dropdown_menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx("a", {
        href: "#",
        className: "nav-link"
      }, "About"), __jsx("ul", {
        className: "dropdown_menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/about-us"
      }, __jsx("a", {
        className: "nav-link"
      }, "About Us"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/about-me"
      }, __jsx("a", {
        className: "nav-link"
      }, "About Me"))))), __jsx("li", {
        className: "nav-item"
      }, __jsx("a", {
        href: "#",
        className: "nav-link"
      }, "Team"), __jsx("ul", {
        className: "dropdown_menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/team"
      }, __jsx("a", {
        className: "nav-link"
      }, "Team"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/team-details"
      }, __jsx("a", {
        className: "nav-link"
      }, "Team Details"))))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/services"
      }, __jsx("a", {
        className: "nav-link"
      }, "Services"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/login"
      }, __jsx("a", {
        className: "nav-link"
      }, "Login"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/signup"
      }, __jsx("a", {
        className: "nav-link"
      }, "Sign Up"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/coming-soon"
      }, __jsx("a", {
        className: "nav-link"
      }, "Coming Soon"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/error"
      }, __jsx("a", {
        className: "nav-link"
      }, "404 Error"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/faq"
      }, __jsx("a", {
        className: "nav-link"
      }, "FAQ"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/contact"
      }, __jsx("a", {
        className: "nav-link"
      }, "Contact"))))), __jsx("li", {
        className: "nav-item"
      }, __jsx("a", {
        href: "#",
        className: "nav-link"
      }, "Blog ", __jsx("i", {
        className: "icofont-simple-down"
      })), __jsx("ul", {
        className: "dropdown_menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/blog"
      }, __jsx("a", {
        className: "nav-link"
      }, "Blog"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/blog-details"
      }, __jsx("a", {
        className: "nav-link"
      }, "Blog Details"))))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/contact"
      }, __jsx("a", {
        className: "nav-link"
      }, "Contact")))), __jsx("div", {
        className: "others-option"
      }, __jsx("ul", null, __jsx("li", null, __jsx("span", {
        className: "search-popup-icon",
        onClick: this.handleSearchForm
      }, __jsx("i", {
        className: "icofont-ui-search"
      }))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/cart"
      }, __jsx("a", {
        className: "cart-icon"
      }, __jsx("i", {
        className: "icofont-bag"
      }), __jsx("span", null, products.length)))), __jsx("li", {
        onClick: this.handleDrawer
      }, __jsx("div", {
        className: "side-menu"
      }, __jsx("span", {
        className: "bar-1"
      }), __jsx("span", {
        className: "bar-2"
      }), __jsx("span", {
        className: "bar-3"
      })))))))), __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.handleDrawer,
        show: this.state.drawer ? 'show' : ''
      })));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Navbar)));

/***/ })

})
//# sourceMappingURL=index.js.2fee01028579df4aaf3f.hot-update.js.map