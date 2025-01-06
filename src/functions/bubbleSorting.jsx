const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const bubbleSorting = async (myArray, setRandArray, setIsActive, isPaused, speed, reset) => {
    let n = myArray.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            setIsActive(j);

            // Wait for pause to resume
            while (isPaused()) {
                await delay(speed);
                if (reset.current) {
                    reset.current = false;
                    return;
                }
            }

            if (reset.current) {
                reset.current = false;
                return;
            }

            await delay(speed);

            // If the value of the next index in array is smaller than current
            if (myArray[j] > myArray[j + 1]) {
                // Swap them
                let temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
                setRandArray([...myArray]);
                swapped = true;
            }
        }
        // Check if the sorting is done and no more sorting is needed
        if (!swapped) {
            break
        };
    }
    return myArray;
};

export default bubbleSorting;
