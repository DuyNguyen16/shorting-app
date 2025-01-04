import{ useContext  } from "react";
import { mainContext } from "../App";

const Header = () => {
    const c = useContext(mainContext)
    const handleOnSelect = () => {
        
    }
    return (
        <div className="h-16 bg-stone-700 absolute w-full  flex justify-between items-center px-4">
            <ul className="flex space-x-4 text-yellow-100">
                <p className="text-black font-semibold">
                    Select Sorting Algorithm:{" "}
                </p>
                <button onClick={() => c.setAlgorithm("bubble")} className={`${c.algorithm == "bubble" ? "text-yellow-400" : ""}`}>
                    Bubble
                </button>
                <button onClick={() => c.setAlgorithm("selection")} className={`${c.algorithm == "selection" ? "text-yellow-400" : ""}`}>
                    Selection
                </button>
                <button onClick={() => c.setAlgorithm("insertion")} className={`${c.algorithm == "insertion" ? "text-yellow-400" : ""}`}>
                    Insertion
                </button>
            </ul>
            <div className="gap-2 flex">
                <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition" onClick={() => c.setSort(true)}>
                    Start Sorting
                </button>
                <button className="bg-emerald-500 px-4 py-2 rounded text-white hover:bg-emerald-600 transition" onClick={() => c.setRandom(true)}>
                    Randomise
                </button>
            </div>
        </div>
    );
};

export default Header;
