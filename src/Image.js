import React from "react";

function Image(props) {
    const { image } = props;

    
    return (
        <div>
            <img src={image}/>
        </div>
    )
}

export default Image;