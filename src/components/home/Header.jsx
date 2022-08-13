import React from "react";
import styled from "styled-components"


const Header = () => {
    return (
        <HeaderBox>
            <TitleBox>
                <h1>🎼 MOTD</h1>
            </TitleBox>
            <BtnBox>
                <Button>sign up</Button>
                <Button>login</Button>
                <Button>progfile</Button>
            </BtnBox>
        </HeaderBox>
    );
};

const HeaderBox = styled.div`
color: rgb(79, 188, 238);
display: flex;
width: 1000px;
margin: 0px auto;
`

const TitleBox = styled.div`
width: 700px;
`
const BtnBox = styled.div`
margin: auto;
`
const Button = styled.button`
background-color: white;
margin: 5px;
color: rgb(79, 188, 238);
padding: 10px;
border: 0px;
font-size: 15px;
font-weight: bold;
`


export default Header;