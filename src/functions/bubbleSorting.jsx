const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const bubbleSorting = async (myArray, setRandArray) => {
    let n = myArray.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            // if the value of the next index in array is smaller than current
            if (myArray[j] > myArray[j + 1]) {
                // swap them
                let temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
                setRandArray([...myArray]);
                await delay(50);
                swapped = true;
            }
        }
        // check if the sorting is done and no more sorting is needed
        if (!swapped) {break};
    }
    return myArray;
};


export default bubbleSorting;
