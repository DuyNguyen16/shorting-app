import{ useContext  } from "react";
import { mainContext } from "../App";

const Header = () => {
    const c = useContext(mainContext)

    return (
        <div className="h-16 bg-[#f5f5dc] absolute w-full  flex justify-between items-center px-4 shadow-myShadow">
            <ul className="flex space-x-4 text-slate-700 font-semibold">
                <p className="text-black font-semibold">
                    Sorting Algorithm:{" "}
                </p>
                <button
                    disabled={c.sort}
                    onClick={() => c.setAlgorithm("bubble")}
                    className={`${
                        c.algorithm == "bubble" ? "text-yellow-400" : ""
                    }`}

                >
                    Bubble
                </button>
                <button
                    disabled={c.sort}
                    onClick={() => c.setAlgorithm("selection")}
                    className={`${
                        c.algorithm == "selection" ? "text-yellow-400" : ""
                    }`}
                >
                    Selection
                </button>
                <button
                    disabled={c.sort}
                    onClick={() => c.setAlgorithm("insertion")}
                    className={`${
                        c.algorithm == "insertion" ? "text-yellow-400" : ""
                    }`}
                >
                    Insertion
                </button>
                <button
                    disabled={c.sort}
                    onClick={() => c.setAlgorithm("merge")}
                    className={`${
                        c.algorithm == "merge" ? "text-yellow-400" : ""
                    }`}
                >
                    Merge
                </button>
            </ul>
            <div className="gap-2 flex">
                <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition" onClick={() => c.handleReset()}>
                    Reset
                </button>
                <button
                    className={
                        c.paused
                            ? `transition bg-orange-500 hover:bg-orange-700 px-4 py-2 rounded text-white`
                            : `transition hover:bg-teal-800 bg-teal-600 px-4 py-2 rounded text-white`
                    }
                    onClick={() => c.togglePause()}
                >
                    {c.paused ? "Resume" : "Pause"}
                </button>
                <button
                    className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition"
                    onClick={() => c.setSort(true)}
                >
                    Start Sorting
                </button>
                <button
                    className="bg-emerald-500 px-4 py-2 rounded text-white hover:bg-emerald-600 transition"
                    onClick={() => c.setRandom(true)}
                >
                    Randomise
                </button>
            </div>
        </div>
    );
};

export default Header;
