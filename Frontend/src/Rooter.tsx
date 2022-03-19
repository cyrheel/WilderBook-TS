import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CreateWilderPage from "./Pages/CreateWilderPage";

function Rooter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="create" element={<CreateWilderPage />} />
      </Routes>
    </Router>
  );
}

export default Rooter;
