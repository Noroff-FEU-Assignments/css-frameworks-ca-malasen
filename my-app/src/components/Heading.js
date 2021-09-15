import React from 'react'

function Heading(props) {
    const headingStyle = {
        color: props.color,
        fontSize: props.fontSize + "px"
    };

    return <h1 style={headingStyle}>{props.content}</h1>
}

export default Heading
