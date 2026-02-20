import {
    fetchNotes,
    createNote,
    deleteNote,
  } from "../../infrastructure/supabase/notesApi.js";
  
  import {
    getCachedNotes,
    saveNotesToCache,
  } from "../../infrastructure/indexeddb/notesCache.js";
  
  export async function loadNotes() {
    const cached = await getCachedNotes();
    const remote = await fetchNotes();
    await saveNotesToCache(remote);
    return remote.length ? remote : cached;
  }
  
  export async function addNote(note) {
    return await createNote(note);
  }
  
  export async function removeNote(id) {
    return await deleteNote(id);
  }