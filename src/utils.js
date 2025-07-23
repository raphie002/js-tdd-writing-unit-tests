// Your code here
export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    // The 'i' flag makes the regex case-insensitive
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}