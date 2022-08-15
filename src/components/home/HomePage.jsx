import React from "react"
//import { useNavigate } from "react-router";
import styled from "styled-components";

const HomePage = () => {
    //const navigate = useNavigate();

    return (
        <>
    <Container>
        <Text>My Music of today</Text>
        <Box>
        <MusicBox 
        // onClick={navigate(`/musics/${musicId}`)}
        >
        <MusicImgBox url = {"https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"}/>
        <MusicText>Attention</MusicText>
        <MusicText>	NewJeans</MusicText>
        </MusicBox>

        <MusicBox>
        <MusicImgBox url = {"https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"}/>
        <MusicText>Hype Boy</MusicText>
        <MusicText>	NewJeans</MusicText>
        </MusicBox>

        <MusicBox>
        <MusicImgBox url = {"https://image.bugsm.co.kr/album/images/1000/204845/20484595.jpg"}/>
        <MusicText> FOREVER 1</MusicText>
        <MusicText>소녀시대</MusicText>
        </MusicBox>
        </Box>

    </Container>
    <Container>
    <Text>Music of the Day by Others</Text>

    </Container>
    </>);
};

const Container = styled.div`
width: 1000px;
height: 500px;
margin: 0px auto;
`
const Box = styled.div`
display: flex;`

const Text = styled.h2`
color: rgb(79, 188, 238);
`

const MusicBox = styled.div`
width: 300px;
height: 400px;
margin: 10px`

const MusicImgBox = styled.div`
width: 300px;
height : 300px;
background-position: center;
background-size: cover;
background-image: url(${(props)=>props.url})
`
const MusicText = styled.p`
color: #023e8a;
text-align: center;
`
export default HomePage;