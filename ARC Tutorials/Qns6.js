let arr = [10, 20, 1, 4, 99, 40];

// 1. Bubble Sort
const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log('Bubble Sort:', bubbleSort([...arr]));


// 2. Selection Sort
const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

console.log('Selection Sort:', selectionSort([...arr]));


// 3. Insertion Sort
const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log('Insertion Sort:', insertionSort([...arr]));


// 4. Merge Sort
const merge = (left, right) => {
  let result = [], l = 0, r = 0;
  
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
};

console.log('Merge Sort:', mergeSort([...arr]));


// 5. Quick Sort
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log('Quick Sort:', quickSort([...arr]));


// 6. Heap Sort
const heapify = (arr, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};

const heapSort = (arr) => {
  let n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Swap
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0);
  }
  return arr;
};

console.log('Heap Sort:', heapSort([...arr]));
