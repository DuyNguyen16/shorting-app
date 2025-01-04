/* eslint-disable react/prop-types */

const Bar = ({ height, width, isActive }) => {
    return (
        <div className={isActive ? `bg-red-500` : `bg-yellow-600`} 
        style={{
            height: `${height}px`,
            width: `${width}px`,

        }}
        >{height}</div>
    )
}

export default Bar