import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    padding-top: 20px;
    background-color:  rgb(3, 95, 57);
    margin-top: 20px;
    padding-bottom: 10px;

    p {
        text-align: center;
        color: white;
    }
`

function Footer() {
    return(
        <>
        <FooterWrapper>
            <p>Copyright of Funmilayo Talabi</p>
            <p>2019</p>
        </FooterWrapper>
    </>
    )
}

export default Footer;