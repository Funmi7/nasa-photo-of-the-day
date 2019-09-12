import React from "react";
import styled from "styled-components";

const TitleDateWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        color: rgb(20, 97, 80);
    }   
`;
const DescrptionHeader = styled.h3`
    color: rgb(34, 158, 131);
`

function MainContent(props) {
const {title, date, description} = props;

return (
    <div>
        <TitleDateWrapper className="title-date-container">
            <h3>Title: {title}</h3>
            <div>
                <p>Date: <span>{date}</span></p>
            </div>
        </TitleDateWrapper>
        <DescrptionHeader className="description-header">Description of Image</DescrptionHeader>
        <p>{description}</p>
    </div>
)
}

export default MainContent;