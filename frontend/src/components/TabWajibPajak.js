import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EditPwp from "./EditPwp";

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        <EditPwp/>{/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;