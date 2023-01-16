import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PkpList from "./components/PkpList";
import AddPkp from "./components/AddPkp";
import EditPkp from "./components/EditPkp";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
      
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<PkpList/>}/>
        <Route path="add" element={<AddPkp/>}/>
        <Route path="edit/:id" element={<EditPkp/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
