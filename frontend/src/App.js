import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PkpList from "./components/PkpList";
import AddPkp from "./components/AddPkp";
import EditPkp from "./components/EditPkp";
import NavbarComponent from "./components/Navbar";
import List from "./components/List";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (

    <BrowserRouter>
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <List />
            <Col>
              <h4><strong>Home</strong></h4>
              <hr />
            </Col>
          </Row>
          <Routes>
            <Route path="/" element={<PkpList />} />
            <Route path="add" element={<AddPkp />} />
            <Route path="edit/:id" element={<EditPkp />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>

  );
}

export default App;
