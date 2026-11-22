import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ZaidDetails from "./pages/ZaidDetails";
import CreateZaid from "./pages/CreateZaid";
import UpdateZaid from "./pages/UpdateZaid";
import AllZaids from "./pages/AllZaids"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/zaids" element={<AllZaids />} />
        <Route path="/zaids/:zaidId" element={<ZaidDetails />} />
        <Route to="/zaids/create" element={<CreateZaid />} />
        <Route path="/zaids/:zaidId/edit" element={<UpdateZaid />} />

      </Routes>
    </div>
  );
}

export default App;
