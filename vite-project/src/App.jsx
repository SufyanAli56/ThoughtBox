import { useNotes } from "./features/notes/useNotes";

import Header from "./components/layout/Header";
import NoteCard from "./components/notes/NoteCard";
import NoteForm from "./components/notes/NoteForm";

function App() {
  // Pull all notes logic from the hook
  const { notes, loading, user, login, logout, create, remove } =
    useNotes();

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading ThoughtBox...
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <button
          onClick={login}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Login with Magic Link
        </button>
      </div>
    );
  }

  // Main App
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header onLogout={logout} />

      <main className="max-w-4xl mx-auto p-6">
        {/* Note Form */}
        <NoteForm onCreate={create} />

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={() => remove(note.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;