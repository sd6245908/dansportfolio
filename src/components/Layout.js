import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import DesktopContainer from "./desktop/container";
import MobileContainer from "./mobile/container";
import SkillStackCard from "./desktop/skillstackcard";
import ProjectTabular from './desktop/projecttabular'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
// const getWidth = () => {
//   const isSSR = typeof window === "undefined";

//   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
// };

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as="h1"
//       content="Imagine-a-Company"
//       inverted
//       style={{
//         fontSize: mobile ? "2em" : "4em",
//         fontWeight: "normal",
//         marginBottom: 0,
//         marginTop: mobile ? "1.5em" : "3em"
//       }}
//     />
//     <Header
//       as="h2"
//       content="Do whatever you want when you want to."
//       inverted
//       style={{
//         fontSize: mobile ? "1.5em" : "1.7em",
//         fontWeight: "normal",
//         marginTop: mobile ? "0.5em" : "1.5em"
//       }}
//     />
//     <Button primary size="huge">
//       Get Started
//       <Icon name="right arrow" />
//     </Button>
//   </Container>
// );

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool
// };

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

// class DesktopContainer extends Component {
//   state = {};

//   hideFixedMenu = () => this.setState({ fixed: false });
//   showFixedMenu = () => this.setState({ fixed: true });

//   render() {
//     const { children } = this.props;
//     const { fixed } = this.state;

//     return (
//       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign="center"
//             style={{ minHeight: 700, padding: "1em 0em" }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? "top" : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size="big"
//             >
//               <Container>
//                 <Menu.Item as="a" active>Dan</Menu.Item>
//                 <Menu.Item as="a">Code</Menu.Item>
//                 <Menu.Item as="a">Projects</Menu.Item>
//                 <Menu.Item as="a">Resume</Menu.Item>

//                 <Menu.Item position="right">
//                   <Button as="a" inverted={!fixed}>
//                     Log in
//                   </Button>
//                   <Button
//                     as="a"
//                     inverted={!fixed}
//                     primary={fixed}
//                     style={{ marginLeft: "0.5em" }}
//                   >
//                     Sign Up
//                   </Button>
//                 </Menu.Item>
//               </Container>
//             </Menu>
//             <HomepageHeading />
//           </Segment>
//         </Visibility>

//         {children}
//       </Responsive>
//     );
//   }
// }

// DesktopContainer.propTypes = {
//   children: PropTypes.node
// };

// class MobileContainer extends Component {
//   state = {};

//   handleSidebarHide = () => this.setState({ sidebarOpened: false });

//   handleToggle = () => this.setState({ sidebarOpened: true });

//   render() {
//     const { children } = this.props;
//     const { sidebarOpened } = this.state;

//     return (
//       <Responsive
//         as={Sidebar.Pushable}
//         getWidth={getWidth}
//         maxWidth={Responsive.onlyMobile.maxWidth}
//       >
//         <Sidebar
//           as={Menu}
//           animation="push"
//           inverted
//           onHide={this.handleSidebarHide}
//           vertical
//           visible={sidebarOpened}
//         >
//           <Menu.Item as="a" active>
//             Home
//           </Menu.Item>
//           <Menu.Item as="a">Work</Menu.Item>
//           <Menu.Item as="a">Company</Menu.Item>
//           <Menu.Item as="a">Careers</Menu.Item>
//           <Menu.Item as="a">Log in</Menu.Item>
//           <Menu.Item as="a">Sign Up</Menu.Item>
//         </Sidebar>

//         <Sidebar.Pusher dimmed={sidebarOpened}>
//           <Segment
//             inverted
//             textAlign="center"
//             style={{ minHeight: 350, padding: "1em 0em" }}
//             vertical
//           >
//             <Container>
//               <Menu inverted pointing secondary size="large">
//                 <Menu.Item onClick={this.handleToggle}>
//                   <Icon name="sidebar" />
//                 </Menu.Item>
//                 <Menu.Item position="right">
//                   <Button as="a" inverted>
//                     Log in
//                   </Button>
//                   <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
//                     Sign Up
//                   </Button>
//                 </Menu.Item>
//               </Menu>
//             </Container>
//             <HomepageHeading mobile />
//           </Segment>

//           {children}
//         </Sidebar.Pusher>
//       </Responsive>
//     );
//   }
// }

// MobileContainer.propTypes = {
//   children: PropTypes.node
// };

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Layout = () => (
  <ResponsiveContainer>
    {/* <Segment id="PROJECTS" style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/wireframe/white-image.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
    <Segment id="ABOUT" vertical style={{ padding: "5em 0em",border:"none"  }}>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <Header as="h1" style={{ fontSize: "3em" }}>
              ABOUT XIAOXU ZHOU
            </Header>
            {/* <Header>
              Dan is a responsible person. He is passionate about coding and
              developing fatastic projects.
            </Header> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Backend Year
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              My programmer life stated at 2009. In the first three years, I
              worked as a Java developer. I wrote JSP and Servlets to add
              functionality to web application based on customer requirements.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              As an IBMer
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              In 2012, I am fortunate to be an IBMer. After finishing the
              maintenance of one JAVA application, I started to learn forntend
              technologies.
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              bordered
              circular
              centered
              size="large"
              src="/images/Dan.JPG"
            />
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </Segment>

    {/* <Segment id="ABOUT" style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/avatar/large/nan.jpg" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    <Segment
      id="SKILLSTACK"
      style={{ padding: "10em 0em", transform: "skewY(-5deg)"}}
      vertical
      color="blue"
      inverted
    >
      <Container textAlign="center" style={{ transform: "skewY(5deg)" }}>
        <Header as="h1" style={{ fontSize: "3em", paddingBottom: "1em" }}>
          SKILL STACK
        </Header>
        <SkillStackCard />
      </Container>
    </Segment>

    <Segment id="PROJECTS" style={{ padding: "20em 0em" }} vertical>
      <Container textAlign="center">
        <Header as="h1" style={{ fontSize: "3em", paddingBottom: "1em" }}>
          PROJECTS
        </Header>
        <ProjectTabular />
      </Container>

    </Segment>

    <Segment inverted vertical style={{ padding: "3em 0em" }} color="blue">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header inverted as="a" content="Linkedin" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="a">
                <a href="./files/ZhouXiaoXu_RESUME.docx">Resume</a>
              </Header>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h4" inverted>
                Site by XIAOXU ZHOU
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default Layout;
