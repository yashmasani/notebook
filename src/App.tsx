import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import Notes from './Notes';
import "./App.css";
import Theme from './Themes/themes';

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");


  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
      <Theme>
        <h1 className="container-title"><u>Welcome to My Notes!</u></h1>
        <Notes/>
      </Theme>
  );
}

export default App;
