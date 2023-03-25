import "./styles/reset.css";
import "./App.css";

import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { Users } from "./components/Users";
import { User } from "./components/User";

function App() {
  const [section, setSection] = useState(0);

  return (
    <div className="App">
      <Navbar setSection={setSection} />
      {section === 0 && <Users />}
      {section === 1 && <SignUp />}
      {section === 2 && <User />}
    </div>
  );
}

export default App;
