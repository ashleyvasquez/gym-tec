import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Tabla } from "./components/Tabla";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { PagintationTable } from "./components/PaginationTable";

/*
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          </Routes>
          </Router>
*/

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  /*
  <div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>

    <Tabla />
  */
 

  return (
    <div>
      <PagintationTable />
    </div>
  );
}

export default App;
