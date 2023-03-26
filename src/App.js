import "./styles/reset.css";
import "./App.css";

import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Users } from "./components/Users";
import { Accounts } from "./components/Accounts";

function App() {
  const [section, setSection] = useState(0);

  return (
    <div className="App">
      <Navbar setSection={setSection} />
      {section === 0 && <Users />}
      {section === 1 && <SignUp setSection={setSection} />}
      {section === 2 && <Accounts />}
    </div>
  );
}

export default App;
