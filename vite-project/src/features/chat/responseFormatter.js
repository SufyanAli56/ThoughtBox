export function formatResponse(query, matches) {
    if (!matches.length) {
      return "I couldn’t find anything relevant in your notes.";
    }
  
    let response = `Based on your notes about "${query}", here’s what I found:\n\n`;
  
    matches.forEach((note, index) => {
      response += `${index + 1}. ${note.title}\n`;
      response += `${note.content}\n\n`;
    });
  
    response += "Let me know if you’d like more details.";
  
    return response;
  }