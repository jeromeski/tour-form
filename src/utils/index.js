export function isHtml(input) {
  return /<[a-z]+\d?(\s+[\w-]+=("[^"]*"|'[^']*'))*\s*\/?>|&#?\w+;/i.test(input);
}

export function capitalizeFirstLetter(input) {
	return input.charAt(0).toUpperCase() + input.slice(1);
}

export function getObjectValue(obj, key) {
	return Object.keys(obj).filter((item) => item === key);
}