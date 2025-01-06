/* eslint-disable react/prop-types */

const Bar = ({ height, width, isActive, smallest }) => {
    return (
        <div className={isActive ? `bg-red-500` : (smallest ? `bg-green-500` : `bg-yellow-600`)}
        style={{
            height: `${height}px`,
            width: `${width}px`,

        }}
        >{height}</div>
    )
}

export default Bar