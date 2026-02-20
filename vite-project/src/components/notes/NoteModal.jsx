export default function NoteModal({ note, onClose }) {
    if (!note) return null;
  
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4"
          >
            ✕
          </button>
  
          <h2 className="text-xl font-semibold mb-4">
            {note.title}
          </h2>
  
          <p className="whitespace-pre-line">
            {note.content}
          </p>
        </div>
      </div>
    );
  }