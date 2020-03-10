import React from "react";
import {
  Button,
  Item,
  Label,
  Modal,
  Header,
  Embed,
  Popup
} from "semantic-ui-react";
import W3ProjectOverlay from './w3projectoverlay'

const ItemExampleDivided = () => (
  <Item.Group divided>
     <Item>
      <Item.Image src="images/Dance2GO-logo.png" />

      <Item.Content>
        <Item.Header>Dance2Go </Item.Header>
        <Item.Meta>
          <span className="cinema">Otc 2019 - Present</span>
        </Item.Meta>
        <Item.Description>
        The business owner plans to migrate his website from ASP to Woocommerce. The corporation between the business owner and the previous developers is quite bad. They spent Two years setting up the website but they failed. I went through everything and gave my professional advice to my client. Our successful communication and corporation push the website online quite soon.
        </Item.Description>
        <Item.Extra>
          <Button
            as="a"
            href="http://www.dance2go.co.nz/"
            target="_blank"
            primary
            floated="right"
          >
            Old Site
            {/* <Icon name="right chevron" /> */}
          </Button>
          <Button
            as="a"
            href="http://www.nz2family.com/"
            target="_blank"
            primary
            floated="right"
          >
            New Site
            {/* <Icon name="right chevron" /> */}
          </Button>
          <Label>Wordpress</Label>
          <Label>Woocommerce</Label>
        </Item.Extra>
      </Item.Content>
    </Item>



    <Item>
      <Item.Image src="images/vfhlogo.png" />

      <Item.Content>
        <Item.Header>Vision For Humanity </Item.Header>
        <Item.Meta>
          <span className="cinema">Nov 2019 - Present</span>
        </Item.Meta>
        <Item.Description>
        Working as a volunteer to advise and re-develop the whole website using Wordpress. I am the only developer and responsible for everything, including setting up the environment, design, and development.
        </Item.Description>
        <Item.Extra>
        <Button
            as="a"
            href="http://www.vfh.org.nz/"
            target="_blank"
            primary
            floated="right"
          >
            Old Site
            {/* <Icon name="right chevron" /> */}
          </Button>
          <Button
            as="a"
            href="http://www.vfh.org.nz/vfh-newsite"
            target="_blank"
            primary
            floated="right"
          >
            New Site
            {/* <Icon name="right chevron" /> */}
          </Button>
          <Label>Wordpress</Label>
        </Item.Extra>
      </Item.Content>
    </Item>




    <Item>
      <Item.Image src="images/rocketshp.png" />

      <Item.Content>
        <Item.Header>RocketShp </Item.Header>
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
            {/* <Icon name="right chevron" /> */}
          </Button>
          <Label>Wordpress</Label>
          <Label>Siteground</Label>
          <Label content="Responsive" />
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src="images/IBM-Logo.jpg" />

      <Item.Content>
        <Item.Header>IBM W3 Portal</Item.Header>
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
                {/* <Icon name="right chevron" /> */}
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
              <W3ProjectOverlay />
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
      <Item.Image src="images/IBM-Logo.jpg" />

      <Item.Content>
        <Item.Header>IBM荟专享</Item.Header>
        <Item.Meta>
          <span className="cinema">April 2018 - May 2018</span>
        </Item.Meta>
        <Item.Description>
          IBM "荟专享" is built on Wechat Mini Progrom Platform. I am the only
          backend developer who is reponsible for the Restful APIs development
          using Java and DB2.
        </Item.Description>
        <Item.Extra>
          <Modal
            trigger={
              <Button primary floated="right">
                See Demo
                {/* <Icon name="right chevron" /> */}
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
      <Item.Image src="images/bt-group-logo-vector.png" />

      <Item.Content>
        <Item.Header>Bulk Utility Tool</Item.Header>
        <Item.Meta>
          <span className="cinema">Jan 2011 - August 2011</span>
        </Item.Meta>
        <Item.Description>
          This project is called 'BULK Utility Tool', which is mainly used to
          process large CSV files. One CSV file normally has more than 100,000
          records. Each record will be processed and stored in Database.
        </Item.Description>
        <Item.Extra>
          <Popup
            content="Oops, the project has... gone."
            position='top center'
            trigger={
              <Button color='grey'  floated="right">
                {" "}
                See ...
                {/* <Icon name="right chevron" /> */}
              </Button>
            }
          />
          <Label>Java</Label>
          <Label>Jsp</Label>
          <Label>Mybatis</Label>
          <Label>Spring</Label>
          <Label>Camel</Label>
          <Label>Oracle</Label>
          <Label>Quartz</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image src="images/neusoft1.png" />

      <Item.Content>
        <Item.Header as="a">Task Management system</Item.Header>
        <Item.Meta>
          <span className="cinema">Oct 2009 - Nov 2011</span>
        </Item.Meta>
        <Item.Description>
          This is also an internal project called "Task Management System". It
          tracks staff daily work. It involves planning, tracking, and
          reporting. I wrote JSP, Servlets and SQL to add functionality. It's
          been a long time. My database skill improved a lot in this project. I
          wrote hundreds of SQL.
        </Item.Description>
        <Item.Extra>
          <Popup
            content="Oops, the project has... gone."
            position='top center'
            trigger={
              <Button color='grey'  floated="right">
                {" "}
                See ...
                {/* <Icon name="right chevron" /> */}
              </Button>
            }
          />

          <Label>Java</Label>
          <Label>Struts</Label>
          <Label>Ibatis</Label>
          <Label>Spring</Label>
          <Label>JSP</Label>
          <Label>Oracle</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemExampleDivided;
