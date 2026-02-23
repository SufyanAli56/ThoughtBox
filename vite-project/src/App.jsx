import { useState } from "react";
import { useNotes } from "./features/notes/useNotes";
import { useChat } from "./features/chat/useChat";

import Header from "./components/layout/Header";
import NoteCard from "./components/notes/NoteCard";
import NoteForm from "./components/notes/NoteForm";

function App() {
  const { notes, loading, user, login, logout, create, remove } = useNotes();
  const { messages, sendMessage } = useChat(notes);

  const [isChatOpen, setIsChatOpen] = useState(false);

  // Loading
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={logout} />

      <main className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Note Form */}
        <NoteForm onCreate={create} />

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={() => remove(note.id)} />
          ))}
        </div>
      </main>

      {/* Floating Chat Icon / Chat Window */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center text-white text-2xl hover:bg-indigo-700 transition-colors"
          title="Chat with your notes"
        >
          💬
        </button>
      )}

      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="font-semibold text-sm">Ask Your Notes 🤖</h2>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white font-bold text-lg"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto max-h-64 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  m.role === "user"
                    ? "bg-indigo-50 text-indigo-700 text-right"
                    : "bg-gray-100 text-gray-800 text-left"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Ask about your notes..."
              className="flex-1 border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() !== "") {
                  sendMessage(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button
              onClick={() => {
                const input = document.querySelector(
                  'input[placeholder="Ask about your notes..."]'
                );
                if (input.value.trim() !== "") {
                  sendMessage(input.value);
                  input.value = "";
                }
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;