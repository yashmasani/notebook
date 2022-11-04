import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function Notes() {
  return (
    <input placeholder="write some notes to remember">
    </input>
  );
}

export default Notes;
