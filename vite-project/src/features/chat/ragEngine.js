import { calculateSimilarity } from "./similarity";

// Search notes using RAG logic
export function searchNotes(notes, query, topK = 3) {
  if (!notes || notes.length === 0) return [];

  const scored = notes.map(note => ({
    ...note,
    score: calculateSimilarity(query, note.title + " " + note.content),
  }));

  const filtered = scored.filter(n => n.score > 0);

  return filtered
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}