const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const selection = async (myArray, setRandArray, isActive) => {
    let n = myArray.length;

    for (let i = 0; i < n; i++) {
        let index = i;
        let smallest = myArray[i]; // Assume the smallest element is at i

        for (let j = i + 1; j < n; j++) {
            if (myArray[j] < smallest) {
                smallest = myArray[j];
                // Update index to the new smallest element
                index = j;
            }
            isActive(j)
            await delay(50); // Delay for visual feedback
        }

        // Swap the current element with the smallest found
        if (index !== i) { // Swap only if there's a new smallest element
            let temp = myArray[i];
            myArray[i] = myArray[index];
            myArray[index] = temp;
        }

        // Update the array state after each outer loop iteration
        setRandArray([...myArray]);
    }

    return myArray; // Return the sorted array
};

export default selection;
