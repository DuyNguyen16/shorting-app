const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// need to be fix
const merge = async (array, left, mid, right, setRandArray, speed, isPaused, reset) => {
    console.log("Merging: ", left, mid, right); // Debugging log
    
    const leftSize = mid - left + 1;
    const rightSize = right - mid;

    const leftArray = array.slice(left, mid + 1); // Left subarray
    const rightArray = array.slice(mid + 1, right + 1); // Right subarray

    console.log("Left Array:", leftArray); // Debugging log
    console.log("Right Array:", rightArray); // Debugging log

    let i = 0, j = 0, k = left; // Indices for left, right, and merged arrays

    // Merge the two subarrays
    while (i < leftSize && j < rightSize) {
        while (isPaused()) {
            await delay(speed); // Pause if needed
            if (reset.current) return; // Exit if reset is triggered
        }
        if (reset.current) return;

        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
        setRandArray([...array]); // Update visualization
        await delay(speed);
    }

    // If there are any remaining elements in the left subarray
    while (i < leftSize) {
        while (isPaused()) {
            await delay(speed);
            if (reset.current) return;
        }
        if (reset.current) return;

        array[k] = leftArray[i];
        i++;
        k++;
        setRandArray([...array]); // Update visualization
        await delay(speed);
    }

    // If there are any remaining elements in the right subarray
    while (j < rightSize) {
        while (isPaused()) {
            await delay(speed);
            if (reset.current) return;
        }
        if (reset.current) return;

        array[k] = rightArray[j];
        j++;
        k++;
        setRandArray([...array]); // Update visualization
        await delay(speed);
    }
};

const mergeSortHelper = async (array, left, right, setRandArray, speed, isPaused, reset) => {
    console.log("mergeSortHelper: ", left, right); // Debugging log

    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Recursively divide the array
        await mergeSortHelper(array, left, mid, setRandArray, speed, isPaused, reset);
        await mergeSortHelper(array, mid + 1, right, setRandArray, speed, isPaused, reset);

        // Merge the sorted halves
        await merge(array, left, mid, right, setRandArray, speed, isPaused, reset);
    }
};

const mergeSorting = async (myArray, setRandArray, setIsActive, isPaused, speed, reset) => {
    console.log("Starting Merge Sort..."); // Debugging log
    await mergeSortHelper(myArray, 0, myArray.length - 1, setRandArray, speed, isPaused, reset);
    return myArray;
};

export default mergeSorting;
