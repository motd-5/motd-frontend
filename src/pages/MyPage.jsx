import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
  const navigate = useNavigate();
    
  
    return (
        <>
            <Header />
            <Container1>
                <Text>Upload Music</Text>
            </Container1>
            <Container2>
                <Text>Likes</Text>
            </Container2>
        </>);
};

export default MyPage;


const Container1 = styled.div`
width: 1000px;
height: 400px;
margin: 0px auto;
margin-bottom: -80px;
`

const Container2 = styled.div`
width: 1000px;
height: 400px;
margin: 0px auto;
`

const Text = styled.h2`
color: rgb(79, 188, 238)`

const MusicImgBox = styled.div`
`