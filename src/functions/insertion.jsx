const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const insertion = async (myArray, setRandArray, setIsActive, isPaused, speed, reset, setSmallest) => {
    const n = myArray.length;
    for (let i = 1; i < n; i++) {
        setIsActive(i);
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

        let current = myArray[i];
        let index = i - 1;
        await delay(speed);
        while (index >= 0 && current < myArray[index]) {
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
            // Highlight the smallest element
            setSmallest(index);
            setRandArray([...myArray]);
            // Shift element to the right
            myArray[index + 1] = myArray[index];
            // Update the visualized array
            index -= 1;
            // Wait before the next iteration
            await delay(speed);
        }
        // Place the current element in the correct position
        myArray[index + 1] = current;
        
    }

    return myArray
}

export default insertion