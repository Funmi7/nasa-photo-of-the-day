import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
    width:100%;
    img {
        max-width: 100%;
    }
    `;

function Image(props) {
    const { image } = props;

    
    return (
        <StyledImage className = "image">
            <img src={image}/>
        </StyledImage>
    )
}

export default Image;
