import React from "react";
import PropTypes from "prop-types";
// import PortfolioProgress from '../components/portfolioprogress'
import { Container, Header} from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => {
  return (
    <Container  >
       {/* <PortfolioProgress /> */}
      <Header
        as="h1"
        content="FRONT END FOCUSED WITH FULL STACK EXPERIENCE"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em"
        }}
      />
           
      <Header
        as="h2"
        content="Welcome to Dan's Portfolio"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em"
        }}
      />
      
      {/* <Progress percent={85} Active indicating inverted color="yellow">When you see this message, it means my portfolio is still under building. I am updating on a daily basis.</Progress> */}
    {/* </Message> */}

      {/* <Button primary size="huge">
        Projects 
        <Icon name="down circle arrow" style={{paddingLeft:"20px"}}/>
      </Button> */}

    </Container>
  );
};
HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
export default HomepageHeading;
