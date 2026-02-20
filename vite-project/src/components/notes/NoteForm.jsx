import { useState } from "react";

export default function NoteForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) return;
    onCreate(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Create New Thought</h2>

      <input
        className="w-full border p-3 rounded-lg mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-3 rounded-lg mb-4"
        placeholder="Write your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Add Note
      </button>
    </div>
  );
}