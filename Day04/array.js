function duplicateForEach(arr) {
  const duplicatedArray = [];

  arr.forEach((item) => {
    duplicatedArray.push(item, item);
  });

  return duplicatedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const duplicatedArray = duplicateForEach(originalArray);
console.log(duplicatedArray); 
