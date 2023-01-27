import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPkp from "./components/AddPkp";
import EditPkp from "./components/EditPkp";
import AddPwp from "./components/AddPwp";
import EditPwp from "./components/EditPwp";
import AddPpl from "./components/AddPpl";
import AddPafe from "./components/AddPafe";
import AddPo from "./components/AddPo";
import TabWajibPajak from "./components/TabWajibPajak";
import TabDashboard from "./components/TabDashboard";
import { List, Navbar } from "./components";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div className="page-container mt-3">
        <div className="content-wrap">
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

                  <Route path="TabDashboard" element={<TabDashboard />} />

                  <Route path="addpafe" element={<AddPafe />} />

                  <Route path="addpo" element={<AddPo />} />

                  <Route path="underconstruction" element={<UnderConstruction />} />
                </Routes>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
