import React from "react";
import {
  Button,
  Icon,
  Image,
  Item,
  Label,
  Modal,
  Header,
  Embed
} from "semantic-ui-react";

const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src="images/rocketshp.png" />

      <Item.Content>
        <Item.Header as="a">RocketShp </Item.Header>
        <Item.Meta>
          <span className="cinema">Two weeks in NZ</span>
        </Item.Meta>
        <Item.Description>
          This is my first practice in New Zealand which happened during the
          break of my study. I developed a responsive website for Rocketshp’s
          client. As the only developer, I am responsible for almost everything,
          including domain/DNS configuration, environment set-up, page
          development and speed optimization.
        </Item.Description>
        <Item.Extra>
          <Button
            as="a"
            href="https://www.eetomachinery.com/"
            target="_blank"
            primary
            floated="right"
          >
            See Website
            <Icon name="right chevron" />
          </Button>
          <Label>Wordpress</Label>
          <Label>Siteground</Label>
          <Label content="Responsive" />
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src="images/ibm-512-black.png" />

      <Item.Content>
        <Item.Header as="a">IBM W3 Portal</Item.Header>
        <Item.Meta>
          <span className="cinema">Aug 2013 - Jan 2018</span>
        </Item.Meta>
        <Item.Description>
          IBM w3 is an internal portal providing one place with personalized
          access to IBM resources like "News", "Media", "E-learning", "Polls"
          and so on. As one of the three main developers, I am responsible for
          developing redesigned visual pages, integrating different features
          through provided APIs and customizing search results. Because
          w3.ibm.com is invisible for external, click the button to see what it
          looks like.
        </Item.Description>

        <Item.Extra>
          <Modal
            trigger={
              <Button primary floated="right">
                See Images
                <Icon name="right chevron" />
              </Button>
            }
          >
            <Modal.Header>IBM W3 Portal</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>
                  <Label>HTML</Label>
                  <Label>Javascript</Label>
                  <Label>BackboneJs</Label>
                  <Label>Grunt</Label>
                  <Label>SASS</Label>
                  <Label>NodeJs</Label>
                </Header>
                <Image src="/images/ibmw3/Signin1.png" />
                <Image src="/images/ibmw3/Cards1-2-3.png" />
                <Image src="/images/ibmw3/Statuses4.png" />
                <Image src="/images/ibmw3/Think40-1.png" />
                <Image src="/images/ibmw3/Think40-3.png" />
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Label>HTML</Label>
          <Label>Javascript</Label>
          <Label>BackboneJs</Label>
          <Label>Grunt</Label>
          <Label>SASS</Label>
          <Label>NodeJs</Label>
          {/* <Label icon="globe" content="Additional Languages" /> */}
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src="images/ibm-512-blue.png" />

      <Item.Content>
        <Item.Header as="a">IBM荟专享</Item.Header>
        <Item.Meta>
          <span className="cinema">April 2018 - May 2018</span>
        </Item.Meta>
        <Item.Description>
          IBM "荟专享" is built on Wechat Mini Progrom Platform. I am the
          only backend developer who is reponsible for the Restful APIs
          development using Java and DB2.
        </Item.Description>
        <Item.Extra>
          <Modal
            trigger={
              <Button primary floated="right">
                See Demo
                <Icon name="right chevron" />
              </Button>
            }
          >
            <Modal.Header>IBM荟专享</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>
                  <Label>Java</Label>
                  <Label>Jersey</Label>
                  <Label>DB2</Label>
                  <Label>Restful API</Label>
                </Header>
                <Embed
                  icon="right circle arrow"
                  active
                  url="files/IBMMiniProgram.mp4"
                />
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Label>Java</Label>
          <Label>Jersey</Label>
          <Label>DB2</Label>
          <Label>Restful API</Label>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src="images/ibm-512-black.png" />

      <Item.Content>
        <Item.Header as="a">Humix Chatbot</Item.Header>
        <Item.Meta>
          <span className="cinema">August 2013 - August 2017</span>
        </Item.Meta>
        <Item.Description>
          Coming soon...
        </Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            See Demo
            <Icon name="right chevron" />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src="images/neusoft.png" />

      <Item.Content>
        <Item.Header as="a">Task Management system</Item.Header>
        <Item.Meta>
          <span className="cinema">August 2013 - August 2017</span>
        </Item.Meta>
        <Item.Description>Coming soon...</Item.Description>
        {/* <Item.Extra>
          <Button primary floated="right">
            See Demo
            <Icon name="right chevron" />
          </Button>
        </Item.Extra> */}
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemExampleDivided;
