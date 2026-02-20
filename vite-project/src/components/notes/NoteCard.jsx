export default function NoteCard({ note, onSelect, onDelete }) {
    return (
      <div
        onClick={() => onSelect(note)}
        className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer"
      >
        <h3 className="font-semibold mb-2">{note.title}</h3>
  
        <p className="text-sm text-gray-600 line-clamp-2">
          {note.content}
        </p>
  
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
          className="text-xs text-red-500 mt-4"
        >
          Delete
        </button>
      </div>
    );
  }