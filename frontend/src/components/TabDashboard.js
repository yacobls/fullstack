import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UnderConstruction from './UnderConstruction';

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="Dashboard"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Dashboard" title="Dashboard">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="Transaksi" title="Transaksi">
        <UnderConstruction/>{/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="Perhatian Khusus" title="Perhatian Khusus">
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;