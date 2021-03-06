import PropTypes from "prop-types";
import React from "react";
import "./App.css";
import {
  Container,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
import DesktopContainer from "./desktop/container";
import MobileContainer from "./mobile/container";
import SkillStackCard from "./desktop/skillstackcard";
import ItemExampleDivided from "./desktop/projectitem";

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
    <Segment id="ABOUT" vertical style={{ padding: "5em 0em", border: "none" }}>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <Header as="h1" style={{ fontSize: "4em", fontWeight: "bold" }}>
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
              Backend Years
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              My programmer life started at 2009. In the first three years, I
              worked as a Java developer. I wrote JSP, Servlets and SQL to add
              functionality to web application based on requirements.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              As an IBMer
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              In 2012, I am fortunate to be an IBMer. In the first project, I
              don't have too much task to work on since it is nearly finished,
              so I have time to learn fornt-end technologies which I am also
              interested in. After the project released, I was assigned to IBM
              Homepage development, which is front-end focused and the longest
              project I'v been working on.
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              bordered
              circular
              centered
              size="large"
              src="/images/Dan.jpg"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment
      id="SKILLSTACK"
      style={{ padding: "10em 0em", transform: "skewY(-2deg)" }}
      vertical
      color="blue"
      inverted
    >
      <Container textAlign="center" style={{ transform: "skewY(2deg)" }}>
        <Header
          inverted
          as="h1"
          style={{ fontSize: "3em", paddingBottom: "1em" }}
        >
          TECHNOLOGY STACK
        </Header>
        <SkillStackCard />
      </Container>
    </Segment>

    <Segment id="PROJECTS" vertical style={{ padding: "5em 0em" }} >
      <Container >
        <Header textAlign="center" as="h1" style={{ fontSize: "3em", paddingBottom: "1em" }}>
          PROJECTS
        </Header>
        {/* <ProjectTabular /> */}

        <ItemExampleDivided  />
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "3em 0em" }} color="blue">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header
                inverted
                as="a"
                content="Linkedin"
                href="https://www.linkedin.com/in/xiaoxuzhou/"
                target='_blank'
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Header
                inverted
                as="a"
                href="./files/Xiaoxu-Zhou-CV.pdf"
                inverted
              >
                {/* <a href="">Resume</a> */}
                Resume
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header
                inverted
                as="a"
                href="https://github.com/sd6245908/dansportfolio"
                inverted
                target='_blank'
              >
                Github
              </Header>
            </Grid.Column>
            <Grid.Column width={10} textAlign='right' >
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
