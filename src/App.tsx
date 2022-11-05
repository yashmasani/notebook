import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import Notes from './Notes';
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const SPREAD = 10;

  function colorSpawner(): number {
    return Math.ceil(Math.random() * 255);
  }

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <span className="container-ball">
        {
          [...Array(6)].map((_, i) => (
            <span style={{ backgroundColor: `rgb(${colorSpawner()}, ${colorSpawner()}, ${colorSpawner()})`, left: `${30 + (i*SPREAD)}%`, animationDelay: `${colorSpawner() - (5 * SPREAD)}s` }} key={i} />
          ))
        }
      </span>
      <h1 className="container-title"><u>Welcome to My Notes!</u></h1>
      <Notes/>
    </div>
  );
}

export default App;
