import React from "react";

function MainContent(props) {
const {title, date, description} = props;

return (
    <div>
        <div className="title-date-container">
            <h3>Title: {title}</h3>
            <div>
                <p>Date: <span>{date}</span></p>
            </div>
            </div>
        <h3 className="description-header">Description of Image</h3>
        <p>{description}</p>
    </div>
)
}

export default MainContent;