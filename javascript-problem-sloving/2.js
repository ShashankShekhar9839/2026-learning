// Sampling function

// A sampling function is a function that selects a subset of data from a larger dataset, usually randomly, instead of processing the entire dataset.

// randomly pick one elemet -- sample([10, 20, 30, 40]) → 30

// randomly pick n elements  -- sample([1,2,3,4,5], 2) → [2,5]

// solution for variant one --> not able to solve by myself, approach was same but missing some basics and edge cases

function sample(arr, n = 1) {
  if (n > arr.length) {
    throw new Error("Sample size cannot exceed array length");
  }

  const sampleIndex = [];
  const result = [];

  while (sampleIndex.length < n) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    if (!sampleIndex.includes(randomIndex)) {
      sampleIndex.push(randomIndex);
      result.push(arr[randomIndex]);
    }
  }

  return result;
}

let arr = [10, 20, 30, 40];
let ans = sample(arr);

console.log(ans);

// solution two very generic not only limited to arrays

function sampleIterable(iterable, k = 1) {
  const reservoir = [];
  let i = 0;

  for (const item of iterable) {
    i++;

    if (reservoir.length < k) {
      reservoir.push(item);
    } else {
      const j = Math.floor(Math.random() * i);
      if (j < k) {
        reservoir[j] = item;
      }
    }
  }

  return reservoir;
}
