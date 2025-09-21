import "./App.css";

import TableComponent from "./pages/orders-list/table";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Layout from "./layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/orders-list"
          element={
            <Layout>
              <TableComponent />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
