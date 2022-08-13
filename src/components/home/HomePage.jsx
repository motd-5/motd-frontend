import React from "react"
import styled from "styled-components";

const HomePage = () => {
    return (
        <>
    <Container>
        <Text>My Music of today</Text>
    </Container>
    <Container>
    <Text>Other Music of today</Text>

    </Container>
    </>);
};

const Container = styled.div`
width: 1000px;
height: 400px;
margin: 0px auto;
`

const Text = styled.h2`
color: rgb(79, 188, 238)`

const MusicImgBox = styled.div`
`

export default HomePage;