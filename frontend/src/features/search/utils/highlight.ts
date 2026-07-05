export function highlightText(
  text: string,
  query: string
) {
  if (!query) return [text];

  const regex = new RegExp(`(${query})`, "gi");

  return text.split(regex);
}