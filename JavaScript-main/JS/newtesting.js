const originalArray = [1, 2, 3, 4, 5, 6, 7];
const rotateBy = 3;
const rotatedArray = new Array(originalArray.length);

for (let i = 0; i < originalArray.length; i++) {

  const j = (i + rotateBy) % originalArray.length;

  rotatedArray[j] = originalArray[i];
}

console.log(rotatedArray)


