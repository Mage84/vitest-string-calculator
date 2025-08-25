export function add(numbers) {
  let sep = /,|\n/;
  let numberPart = numbers;

  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n', 2);
    const delimiterPart = parts[0].slice(2);
    numberPart = parts[1] || '';

    const matches = delimiterPart.match(/\[(.*?)\]/g);
    if (matches) {
      const delimiters = matches.map(s => s.slice(1, -1));
      const escapedDelimiters = delimiters.map(d =>
        d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      );
      sep = new RegExp(escapedDelimiters.join('|'), 'g');
    } else {
      sep = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    }
  }

  const stringArray = numberPart.split(sep);
  const numberArray = stringArray.map(Number);

  let result = 0;
  let negatives = [];

  for (let number of numberArray) {
    if (number < 0) {
      negatives.push(number);
    }
    if (number > 1000) {
      continue;
    }
    result += number;
  }

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed. ${negatives.join(', ')}`);
  }

  return result;
}
