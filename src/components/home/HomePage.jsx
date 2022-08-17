import React from "react"
import styled from "styled-components";
import Header from "./Header";

const HomePage = () => {

return (
<>
    <Header />
    <Container>
        <Text>My Music of today</Text>
    </Container>
    <Container>
        <Text>Other Music of today</Text>
    </Container>
</>);
};

export default HomePage;

const Container = styled.div`
width: 1000px;
height: 400px;
margin: 0px auto;
`

const Text = styled.h2`
color: rgb(79, 188, 238)`

const MusicImgBox = styled.div`
`

