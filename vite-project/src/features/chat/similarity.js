// Calculate similarity between query and note text
// Ignores common stopwords, case-insensitive
export const stopwords = [
    "how", "does", "what", "is", "the", "a", "an", "in", "on", "for", "to", "and", "of"
  ];
  
  export function calculateSimilarity(query, text) {
    if (!query || !text) return 0;
  
    const cleanQuery = query.toLowerCase().replace(/[^\w\s]/g, "");
    const cleanText = text.toLowerCase();
  
    const queryWords = cleanQuery
      .split(/\s+/)
      .filter(word => !stopwords.includes(word));
  
    let score = 0;
  
    queryWords.forEach(word => {
      if (cleanText.includes(word)) score += 1;
    });
  
    return score;
  }