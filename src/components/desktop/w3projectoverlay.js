import React from "react";
import { Image, Segment, Header, Card } from "semantic-ui-react";

const W3ProjectOverlay = () => {
  let root = "/images/ibmw3/";
  return (
    <Segment.Group color="Grey" raised>
      <Segment raised>
        <Header as="h4">Landing Page</Header>
        <Image src="/images/ibmw3/Signin1.png" />
      </Segment>
      <Segment raised>
        <Header as="h4">Medium Cards</Header>
        {/* <Image src="/images/ibmw3/Cards1-2-3.png" /> */}
        <Card.Group itemsPerRow={4}>
          <Card raised image={root+'MediaCard1.png'} />
          <Card raised image={root+'NewsCard1.png'} />
          <Card raised image={root+'Think40-1.png'} />
          <Card raised image={root+'LearningCard2.png'} />
        </Card.Group>
      </Segment>
      <Segment raised>
        <Header as="h4">Flipped Cards</Header>
        <Card.Group itemsPerRow={2}>
          <Card raised image={root+'Headlines4.png'} />
          <Card raised image={root+'Places2.png'} />
          <Card raised image={root+'Statuses4.png'} />
          <Card raised image={root+'Think40-3.png'} />
        </Card.Group>
      </Segment>
     
    </Segment.Group>
  );
};
export default W3ProjectOverlay;
