/*  
Highest Commodity Price Before Given Timestamp

You are given an array prices, where each element is a pair
[timestamp, price], representing the price of a commodity recorded at a given timestamp.

For a query timestamp T, return the highest price recorded at or before timestamp T.

If no price exists at or before T, return -1.

Constraints

Price records may not be sorted by timestamp

Multiple queries may be performed

Example

Input

prices = [[1, 100], [2, 80], [3, 120], [5, 90]]
T = 4

Output
120

Test Cases
Test Case 1
prices = [[1, 100], [2, 80], [3, 120], [5, 90]]
T = 3
Output: 120

Test Case 2
prices = [[1, 200], [4, 150], [6, 180]]
T = 5
Output: 200

Test Case 3
prices = [[5, 300], [8, 400]]
T = 3
Output: -1

Test Case 4
prices = [[10, 500]]
T = 10
Output: 500

Test Case 5 (Edge Case: Unsorted Input)
prices = [[5, 90], [1, 100], [3, 120]]
T = 3
Output: 120

*/

// approach --- price hai unsorted

// this is my solution, TC - O(n), SC - O(1)

function maxPriceAtTimeStamp(arr = [], timestamp) {
  let maxPrice = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let [time, price] = arr[i];
    if (time <= timestamp) {
      if (price > maxPrice) {
        maxPrice = price;
      }
    }
  }

  return maxPrice;
}

let prices = [
  [5, 90],
  [1, 100],
  [3, 120],
];
let t = 3;

let ans = maxPriceAtTimeStamp(prices, t);
console.log(ans);
