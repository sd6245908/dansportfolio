import React,{Component} from "react";
import PropTypes from 'prop-types';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import Util from '../util';
import HomepageHeading from '../HomePageHeading';
class MobileContainer extends Component {
  state = {};
  textInput = React.createRef();

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  menuItemClick =(e) =>{
    e.preventDefault();
    let id = `#${e.target.textContent}`;
    this.handleSidebarHide();
    setTimeout(() => {
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth" });
    }, 250);
    console.log(this);
    
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={Util.getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" refs={this.textInput} active>
            Home
          </Menu.Item>
          <Menu.Item as="a" content='ABOUT'  refs={this.textInput} onClick={this.menuItemClick}></Menu.Item>
          <Menu.Item as="a" content='SKILLSTACK' onClick={this.menuItemClick}></Menu.Item>
          <Menu.Item as="a" content='PROJECTS' onClick={this.menuItemClick}></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                {/* <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item> */}
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
