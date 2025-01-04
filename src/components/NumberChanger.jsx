import { useContext } from 'react';
import { mainContext } from '../App';

function NumberChanger() {
    const c = useContext(mainContext)

    // Handle changes from the input field
    const handleInputChange = (event) => {
        c.setSpeed(event.target.value);
    };

    // Handle changes from the slider
    const handleSliderChange = (event) => {
        c.setSpeed(event.target.value);
    };

    return (
        <div className="absolute bottom-0 left-0 bg-[#f5f5dc] p-2 shadow-myShadow">
            <div className='flex flex-col gap-2'>
                <h2 className="font-semibold">Speed</h2>

                {/* Slider */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={c.speed}
                    onChange={handleSliderChange}
                />

                {/* Input Field */}
                <input
                    type="number"
                    value={c.speed}
                    onChange={handleInputChange}
                    className='border border-black'
                />
                <p className='font-semibold'>Input Value: {c.speed}</p>
            </div>
        </div>
    );
}

export default NumberChanger;
