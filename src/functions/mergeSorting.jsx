const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const merge = async (array, left, mid, right, setRandArray, speed, isPaused, reset) => {
    const leftSize = mid - left + 1;
    const rightSize = right - mid;

    const leftArray = array.slice(left, mid + 1); // Left subarray
    const rightArray = array.slice(mid + 1, right + 1); // Right subarray

    let i = 0, j = 0, k = left; // Indices for left, right, and merged arrays

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

    while (i < leftSize) {
        while (isPaused()) {
            await delay(speed);
            if (reset.current) return;
        }
        if (reset.current) return;

        array[k] = leftArray[i];
        i++;
        k++;
        setRandArray([...array]);
        await delay(speed);
    }

    while (j < rightSize) {
        while (isPaused()) {
            await delay(speed);
            if (reset.current) return;
        }
        if (reset.current) return;

        array[k] = rightArray[j];
        j++;
        k++;
        setRandArray([...array]);
        await delay(speed);
    }

    
};

const mergeSortHelper = async (array, left, right, setRandArray, speed, isPaused, reset) => {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Recursively divide the array
        await mergeSortHelper(array, left, mid, setRandArray, speed, isPaused, reset);
        await mergeSortHelper(array, mid + 1, right, setRandArray, speed, isPaused, reset);

        // Merge sorted halves
        await merge(array, left, mid, right, setRandArray, speed, isPaused, reset);
    }
};

const mergeSorting = async (myArray, setRandArray, setIsActive, isPaused, speed, reset) => {
    console.log("HLEOO")
    await mergeSortHelper(myArray, 0, myArray.length - 1, setRandArray, speed, isPaused, reset);
    return myArray;
};

export default mergeSorting;
