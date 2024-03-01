function reverseArray<T>(arr: T[]): T[] {
  // Implement logic to reverse the array
  const reversedArray = [...arr].reverse(); // Spread operator for copy and reverse methods
  return reversedArray;
}

// Example usage with different types
const numbers: number[] = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);