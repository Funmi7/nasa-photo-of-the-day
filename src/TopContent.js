import React from "react";
import styled from "styled-components";

const MainHeading = styled.h1`
   color: rgb(34, 158, 131);
`

function TopContent() {
    return(
        <div>
            <MainHeading className="mainHeading">Picture Of The Day! 🚀</MainHeading>
            <p>Here is the Picture of the day. Awesome right?!</p>
        </div>
    )
}
    
export default TopContent;