export function stripTags(html) {
  return html.replace(/<\/?p>/g, '').replace(/<br\s*\/?>/g, '');
}

export function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
