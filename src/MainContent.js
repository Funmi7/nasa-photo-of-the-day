import React from "react";

function MainContent(props) {
const {title, date, description} = props;

return (
    <div>
        <div className="title-date-container">
        <h3>Title: {title}</h3>
        <h3>Date:</h3>
        </div>
        <p>{date}</p>
        <h3>Description of Image</h3>
        <p>{description}</p>
    </div>
)
}

export default MainContent;