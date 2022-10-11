// Write a function called best, that returns the maximum profit.

// The function takes in an array of numbers/stock prices
// the function should return the maxium possible profit. 
// look for the smallest value to buy and sell at the highest value. 




let best = arr => {
    let result = [];
   for (let i = 0;i < arr.length; i++) {
        for (let k = i + 1;k < arr.length; k++) {
            if (arr[k] - arr[i] > result ) {
                result = arr[k] - arr[i];
            }
        }
   }
   console.log(result)
}


best([1, 2, 3, 4, 5])
best([2, 3, 10, 6, 4, 8, 1])

best([7, 9, 5, 6, 3, 2])

best([0, 100])
