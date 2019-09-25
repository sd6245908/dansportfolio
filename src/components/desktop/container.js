import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import Util from "../util";
import HomepageHeading from "../HomePageHeading";

// `const getWidth = () => {
//     const isSSR = typeof window === "undefined";

//     return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
//   };`

class DesktopContainer extends Component {
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  menuItemClick = function(e) {
    e.preventDefault();
    setTimeout(()=> {
      document.querySelector("#"+this.content).scrollIntoView({ behavior: "smooth" });
    }, 250);
    console.log(this);
  };

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive
        getWidth={Util.getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Visibility
          once={false}
          onTopPassed={this.showFixedMenu}
          onBottomPassedReverse = {this.showFixedMenu}
          onTopPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" , borderBottom:"1px solid white",clipPath:"polygon(0 0, 100% 0, 100% 60vh, 0 100%)"}}
            vertical
            color="blue"
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              //   pointing={!fixed}
              //   secondary={!fixed}
              size="large"
              color="blue"
              style={
                fixed
                  ? { transition: "min-height 0.2s ease 0s", minHeight: "70px" }
                  : {}
              }
            >
              <Container>
                <Menu.Item
                  as="a"
                  content="HOME"
                  position="right"
                  onClick={this.menuItemClick}
                ></Menu.Item>
                <Menu.Item
                  as="a"
                  content="PROJECTS"
                  href="#PROJECTS"
                  onClick={this.menuItemClick}
                ></Menu.Item>
                <Menu.Item
                  as="a"
                  content="ABOUT"
                  href="#ABOUT"
                  onClick={this.menuItemClick}
                ></Menu.Item>
                <Menu.Item
                  as="a"
                  content="CONTACT"
                  href="#CONTACT"
                  onClick={this.menuItemClick}
                ></Menu.Item>
                {/* <Menu.Item as="a" href="https://github.com/sd6245908/dansportfolio" target="_blank">MYGIT</Menu.Item>
                
                <Menu.Item as="a">RESUME</Menu.Item> */}

                {/* <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item> */}
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}
DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default DesktopContainer;
