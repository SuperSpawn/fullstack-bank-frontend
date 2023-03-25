import "./styles/reset.css";
import "./App.css";

import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Users } from "./components/Users";

function App() {
  const [section, setSection] = useState(0);

  return (
    <div className="App">
      <Navbar setSection={setSection} />
      {section === 0 && <Users />}
      {section === 1 && <SignUp />}
    </div>
  );
}

export default App;
