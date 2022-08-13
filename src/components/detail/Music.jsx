import React from "react";
import "./styles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Comment from "../comment/Comment";
import { useState } from "react";
import MusicImage from "./MusicImage";
import styled from "styled-components";

const Music = () => {
  const [comment, setComment] = useState(false);
   
  return( 
    <Container>
      <div>
        <h1>노래 제목</h1>
        <h4>아티스트</h4>
        <p>앨범명</p>
      </div>

      <MusicImage/>
      
      <AudioPlayer
        className="music-box"
        autoPlay
        src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
        onPlay={e => console.log("onPlay")}/>
       
        <button onClick={()=>setComment(!comment)}>댓글 보기</button> 
        {comment === true ? <Comment/> : null}
        
    </Container>
  );
};

const Container = styled.div`
font-family: sans-serif;
text-align: center;
`

export default Music;