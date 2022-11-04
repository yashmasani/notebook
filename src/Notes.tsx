import { invoke } from "@tauri-apps/api/tauri";
import './Notes.css';

function Notes() {

  return (
    <textarea placeholder="Write some notes buddy" className="notes">
    </textarea>
  );
}

export default Notes;
