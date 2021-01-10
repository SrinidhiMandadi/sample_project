import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from "../images/logo-1.png";
import logoMobile from "../../static/images/logo/logo.png";
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  };

  render() {
    const config = this.props.data.configJson;
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <div className="logoimage"></div>
            <Link to="/">
              {/* <img height={config.logo.desktop_height} alt={config.logo.alt} src={config.logo.desktop} /> */}
              <img height="100px" width="345px" alt={config.logo.alt} src={logo}/>
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              {/* <img height={config.logo.desktop_height} alt={config.logo.alt} src={config.logo.mobile} /> */}
              <img height="100px" width="170px" alt={config.logo.alt} src={logoMobile}/>
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        configJson {
          logo {
            alt
            desktop
            mobile
            desktop_height
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
