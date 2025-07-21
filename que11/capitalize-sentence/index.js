function capitalizeSentence(text) {
  if (!text || typeof text !== "string") return "";
  return text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (match) => match.toUpperCase());
}

module.exports = capitalizeSentence;
