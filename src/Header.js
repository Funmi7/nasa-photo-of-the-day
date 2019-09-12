import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
    background-color:  rgb(3, 95, 57);

    h3 {
        font-style: italic;
        color: white;
    }

    nav a {
        text-decoration: none;
        padding-left: 2rem;
        color: white;

        &:hover {
        color: rgb(190, 255, 228);  
        }
    }
`;
function Header() {
    return(
        <HeaderDiv>
            <h3>BestPicture</h3>
            <nav>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Subscribe</a>
            </nav>
        </HeaderDiv>
    )
}

export default Header;