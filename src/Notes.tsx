import { invoke } from "@tauri-apps/api/tauri";

function Notes() {

  return (
    <textarea placeholder="Write some notes buddy" className="notes">
    </textarea>
  );
}

export default Notes;
