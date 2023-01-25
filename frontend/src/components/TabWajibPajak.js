import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EditPwp from "./EditPwp";
import AddPo from "./AddPo";

function JustifiedExample() {
    return (
        <Tabs
            defaultActiveKey="Wajib Pajak"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="Wajib Pajak" title="Wajib Pajak">
                <EditPwp />{/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Outlet" title="Outlet">
                <AddPo />{/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="Transaksi" title="Transaksi">
                {/* <Sonnet /> */}
            </Tab>
        </Tabs>
    );
}

export default JustifiedExample;