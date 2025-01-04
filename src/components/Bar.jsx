/* eslint-disable react/prop-types */

const Bar = ({ height, width }) => {
    return (
        <div className="bg-yellow-600" 
        style={{
            height: `${height}px`,
            width: `${width}px`,

        }}
        >{height}</div>
    )
}

export default Bar