import React from "react";

function MainContent(props) {
const {title, date, description} = props;

return (
    <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
    </div>
)
}

export default MainContent;