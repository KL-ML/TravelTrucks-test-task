export function textBeautyfy(text) {
  if (!text) {
    return '';
  }
  if (text.length === 2) {
    return text;
  }
  const withSpaces = text.replace(/([A-Z])/g, ' $1');
  const lowerText = withSpaces.toLowerCase();
  const beautyText = lowerText.charAt(0).toUpperCase() + lowerText.slice(1);
  return beautyText;
}
