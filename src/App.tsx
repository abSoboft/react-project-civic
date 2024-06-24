import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { API_URL } from "./contant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Layout from "./Layouts/Layout";
import Contact from "./Components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  console.log(API_URL);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact/:id/:contactId" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
