import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  // useParams,
} from "react-router-dom";

import Landing from "./components/Landing";
import React from "react";

function App() {
  const [on_hover, set_on_hover] = React.useState(false);
  sessionStorage.setItem("nodeBackendURL", "http://localhost:5050/");

  return (
    <>
      <div
        onMouseEnter={() => set_on_hover(true)}
        onMouseLeave={() => set_on_hover(false)}
        style={{
          height: "98vh",
          width: "98vw",
          marginTop: "1vh",
          marginLeft: "1vw",
          border: on_hover ? "1px solid black" : "none",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
