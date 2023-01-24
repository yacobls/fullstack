import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPkp from "./components/AddPkp";
import EditPkp from "./components/EditPkp";
import AddPwp from "./components/AddPwp";
import EditPwp from "./components/EditPwp";
import AddPpl from "./components/AddPpl";
import TabWajibPajak from "./components/TabWajibPajak";
import { List, Navbar } from "./components";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <List />
            <Col>
              <h4><strong>Home</strong></h4>
              <hr />
              <Row>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="addpkp" element={<AddPkp />} />
                  <Route path="editpkp/:id" element={<EditPkp />} />

                  <Route path="addpwp" element={<AddPwp />} />
                  <Route path="editpwp/:id" element={<EditPwp />} />

                  <Route path="TabWajibPajak" element={<TabWajibPajak />} />

                  <Route path="addppl" element={<AddPpl />} />
                </Routes>
              </Row>
            </Col>
          </Row>

        </Container>
      </div>
    </BrowserRouter>

  );
}

export default App;
