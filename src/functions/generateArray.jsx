
const generateArray = (height, nums) => {
    const myArray = new Array(10);
    const maxHeight = Math.floor(height/1.2);

    for (let i = 0; i < nums; i++) {
        let randNum = Math.floor(Math.random() * (maxHeight - 20 + 1)) + 20;
        myArray[i] = (randNum);
    }
    return myArray;
}

export default generateArray