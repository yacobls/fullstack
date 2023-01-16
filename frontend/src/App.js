import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPkp from "./components/AddPkp";
import EditPkp from "./components/EditPkp";
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
                  <Route path="add" element={<AddPkp />} />
                  <Route path="edit/:id" element={<EditPkp />} />
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
