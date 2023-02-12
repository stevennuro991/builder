import Layout from "./components/shared/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Estate from "./components/Estate";
import Materials from "./components/Materials";
import Registration from "./components/Registration";

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
        </Route>
        {/* <Route
          path="register"
          element={<Registration/>}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
