import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import generateArray from './functions/generateArray';
import bubbleSorting from "./functions/bubbleSorting";
import selection from "./functions/selection";

export const mainContext = React.createContext({});

const App = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const boxHeight = Math.floor(windowHeight / 1.5);
    const boxWidth = Math.floor(windowWidth / 1.5);
    const BARWIDTH = 27;
    const numsOfBars = Math.floor((boxWidth / 1.1) / BARWIDTH);

    const [algorithm, setAlgorithm] = useState('');
    const [randArray, setRandArray] = useState([]);
    const [random, setRandom] = useState(true);
    const [sort, setSort] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const [speed, setSpeed] = useState(50);
    const pausedRef = useRef(false);

    const togglePause = () => {
        pausedRef.current = !pausedRef.current; // Update ref
    };

    useEffect(() => {
        setRandArray(generateArray(boxHeight, numsOfBars));
        setRandom(false);
    }, [random]);

    useEffect(() => {
        if (sort) {
            const sortArray = async () => {
                switch (algorithm) {
                    case "bubble":
                        await bubbleSorting([...randArray], setRandArray, setIsActive, () => pausedRef.current, 100 - speed);
                        break;
                    case "selection":
                        await selection([...randArray], setRandArray, setIsActive);
                        break;
                    default:
                        console.log("");
                        break;
                }
                setSort(false);
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
        isActive,
        setIsActive,
        paused: pausedRef.current,
        togglePause,
        speed, 
        setSpeed,
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
