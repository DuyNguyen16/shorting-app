import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import generateArray from './functions/generateArray';
import bubbleSorting from "./functions/bubbleSorting";

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

    useEffect(() => {
        setRandArray(generateArray(boxHeight, numsOfBars));
        setRandom(false);
    }, [random]);

    useEffect(() => {
        if (sort) {
            const sortArray = async () => {
                await bubbleSorting([...randArray], setRandArray);
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
        setSort
    };

    return (
        <mainContext.Provider value={context}>
            <main className="bg-stone-700">
                <Header />
                <MainScreen />
            </main>
        </mainContext.Provider>
    );
};

export default App;
