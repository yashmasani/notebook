import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import Notes from './Notes';
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <span className="container-ball"></span>
      <h1 className="container-title"><u>Welcome to My Notes!</u></h1>
      <Notes/>
    </div>
  );
}

export default App;
