import React from "react";
import { Card, Image, Icon, Label, Transition } from "semantic-ui-react";

const items = [
  {
    Header: "Frontend",
    Meta: "Four Years",
    Description: "ReactJS,JQuery,BackboneJS,NodeJS",
    Image: "../images/javascript.png"
  }
];

// toggleVisibility = () =>
// this.setState((prevState) => ({ visible: !prevState.visible }))

const SkillStackCard = () => (
  <Card.Group itemsPerRow={3} centered>
  <Card style={{ margin: "0em,2em" }} raised  >
        <Card.Content>
          {/* <Label attached='top'size='big' color='brown'>Frontend</Label> */}
          <Card.Header> Frontend </Card.Header>

          <Image
            src="../images/javascript.png"
            size="medium"
            style={{ padding: "2em" }}
          />

          {/* <Icon name="html5" size='massive' /> */}
          {/* <Card.Meta>Four Years</Card.Meta> */}
          <Card.Description>
            <Label as="a" color="brown">
              ReactJS
            </Label>
            <Label as="a" color="brown">
              JQuery
            </Label>
            <Label as="a" color="brown">
              BackboneJS
            </Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="hourglass half" />4 Years +
        </Card.Content>
      </Card>

    <Transition visible={false} animation="scale" duration={500}>
      <Card style={{ margin: "0em,2em" }} raised >
        <Card.Content>
          {/* <Label attached='top'size='big' color='brown'>Frontend</Label> */}
          <Card.Header> Frontend </Card.Header>

          <Image
            src="../images/javascript.png"
            size="medium"
            style={{ padding: "2em" }}
          />

          {/* <Icon name="html5" size='massive' /> */}
          {/* <Card.Meta>Four Years</Card.Meta> */}
          <Card.Description>
            <Label as="a" color="brown">
              ReactJS
            </Label>
            <Label as="a" color="brown">
              JQuery
            </Label>
            <Label as="a" color="brown">
              BackboneJS
            </Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="hourglass half" />4 Years +
        </Card.Content>
      </Card>
    </Transition>
    
    <Card raised>
      <Card.Content>
        <Card.Header content="Server" />
        <Image
          src="../images/java.png"
          size="medium"
          style={{ padding: "3em" }}
        />
        {/* <Card.Meta content="Three Years" /> */}
        <Card.Description >
          <Label as="a" color="brown">
            Sprint
          </Label>
          <Label as="a" color="brown">
            Hibernate
          </Label>
          <Label as="a" color="brown">
            Mybatis
          </Label>
          <Label as="a" color="brown">
            Jersey
          </Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="hourglass half" />3 Years
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
        <Card.Header>Database</Card.Header>
        <Image
          src="../images/database.png"
          size="medium"
          style={{ padding: "4em" }}
        />

        {/* <Card.Meta>Four Years</Card.Meta> */}
        <Card.Description>
          <Label as="a" color="brown">
            Oracle
          </Label>
          <Label as="a" color="brown">
            MySql
          </Label>
          <Label as="a" color="brown">
            DB2
          </Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="hourglass half" />2 Years
      </Card.Content>
    </Card>
    {/* <Card.Header content="DATABASE" />
      <Image src="../images/database.png" wrapped ui={false} size="medium" />
      <Card.Content meta="Two Years" description="Oracle|MySql|DB2" />
    </Card> */}
  </Card.Group>
);

export default SkillStackCard;
