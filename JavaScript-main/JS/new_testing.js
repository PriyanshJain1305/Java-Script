function MoreUsedElement (arr){
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
         let currentCount = 0;

        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                  currentCount++;
            }             
        }

        if (currentCount > count) {
            count = currentCount;
            maxCount = arr[i];
        }
        
    }
    return maxCount;
}
const elements = [1, 2, 3, 2, 5, 7, 8, 8, 8];
const maxCount = MoreUsedElement(elements);

console.log(`element is ${maxCount}`);

