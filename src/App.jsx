import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import generateArray from './functions/generateArray';
import bubbleSorting from "./functions/bubbleSorting";
import selection from "./functions/selection";
import insertion from "./functions/insertion";
import mergeSorting from "./functions/mergeSorting";

export const mainContext = React.createContext({});

const App = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const boxHeight = Math.floor(windowHeight / 1.5);
    const boxWidth = Math.floor(windowWidth / 1.5);
    const BARWIDTH = 27;
    const numsOfBars = Math.floor((boxWidth / 1.1) / BARWIDTH);

    const [algorithm, setAlgorithm] = useState("bubble");
    const [randArray, setRandArray] = useState([]);
    const [random, setRandom] = useState(true);
    const [sort, setSort] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const [speed, setSpeed] = useState(60);
    const [reset, setReset] = useState(false);
    const [smallest, setSmallest] = useState(0)
    const pausedRef = useRef(false);
    const resetRef = useRef(false);

    const togglePause = () => {
        pausedRef.current = !pausedRef.current;
    };

    const handleReset = () => {
        setSmallest(-1)
        resetRef.current = true;
        setReset(true);
        setRandom(true);
    }

    useEffect(() => {
        setSmallest(-1)
        resetRef.current = true;
        setReset(true);
        setRandArray(generateArray(boxHeight, numsOfBars));
        setRandom(false);
    }, [random]);

    useEffect(() => {
        if (sort) {
            const sortArray = async () => {
                switch (algorithm) {
                    case "bubble":
                        setSmallest(-1);
                        await bubbleSorting([...randArray], setRandArray, setIsActive, () => pausedRef.current, 100 - speed, resetRef);
                        break;
                    case "selection":
                        await selection([...randArray], setRandArray, setIsActive, () => pausedRef.current, 100 - speed, resetRef, setSmallest);
                        break;
                    case "insertion":
                        await insertion([...randArray], setRandArray, setIsActive, () => pausedRef.current, 100 - speed, resetRef, setSmallest);
                        setSmallest(-1);
                        break;
                    case "merge":
                        await mergeSorting([...randArray], setRandArray, setIsActive, () => pausedRef.current, 100 - speed, resetRef);
                        break;
                    default:
                        console.log("No sorting algorithm selected.");
                        break;
                }
                setSort(false);
                setIsActive(0);
                pausedRef.current = false;
            };
            sortArray();
        }
    }, [sort]);
    

    const context = {
        algorithm,
        setAlgorithm,
        windowHeight,
        windowWidth,
        boxHeight,
        boxWidth,
        BARWIDTH,
        numsOfBars,
        randArray,
        setRandArray,
        setRandom,
        setSort,
        sort,
        isActive,
        setIsActive,
        paused: pausedRef.current,
        togglePause,
        speed, 
        setSpeed,
        reset, 
        setReset,
        handleReset,
        smallest, 
        setSmallest
    };

    return (
        <mainContext.Provider value={context}>
            <main className="bg-slate-300">
                <Header />
                <MainScreen />
            </main>
        </mainContext.Provider>
    );
};

export default App;
