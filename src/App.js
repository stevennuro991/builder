import Layout from "./components/shared/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Estate from "./components/Estate";
import Materials from "./components/Materials";
import Registration from "./components/Registration";
import Disclaimer from "./components/Disclaimer";
import Contact from "./components/Contact";
import About from "./components/About";
import { Registration1 } from "./components/Registration1";
import Table from "./components/Table";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Materials />} />
          <Route path="estates" element={<Estate />} />
          <Route
          path="register"
          element={<Registration/>}
        />
         <Route
          path="table"
          element={<Table/>} 
        />
          <Route
          path="disclaimer"
          element={<Disclaimer/>} 
        />
         <Route
          path="about"
          element={<About/>} 
        />
          <Route
          path="bldr"
          element={<Contact/>} 
        />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
