import { useState } from "react";
import { useNotes } from "../../features/notes/UseNotes";
import { useChat } from "../../features/similarity.js/useChat";
import { useChat } from "../../features/chat/useChat";
export default function ChatBox() {
  const { notes } = useNotes();
  const { messages, sendMessage } = useChat(notes);

  const [input, setInput] = useState("");

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Ask Your Notes
      </h2>

      <div className="max-h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              msg.role === "user"
                ? "bg-indigo-100 text-right"
                : "bg-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded p-2"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}