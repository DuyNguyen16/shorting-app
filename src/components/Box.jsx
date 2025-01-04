import Bar from "./Bar";
import { useContext } from "react";
import { mainContext } from "../App";

const Box = () => {
    const c = useContext(mainContext);

    return (
        <div className="px-1 bg-[#f5f5dc] shadow-myShadow">
            <div
                style={{
                    width: `${c.boxWidth}px`,
                    height: `${c.boxHeight}px`,
                }}
                className="bg-[#f5f5dc] flex flex-wrap justify-between items-end"
            >
                {c.randArray.map((bar, index) => {
                    return <Bar height={bar} width={c.BARWIDTH} key={index} isActive={c.isActive == index ? true : false} />;
                })}
            </div>
        </div>
    );
};

export default Box;
