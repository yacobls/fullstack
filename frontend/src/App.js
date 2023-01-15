import {BrowserRouter, Routes, Route} from "react-router-dom";
import PkpList from "./components/PkpList";
import AddPkp from "./components/AddPkp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PkpList/>}/>
        <Route path="add" element={<AddPkp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
