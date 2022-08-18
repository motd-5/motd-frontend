import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getCommentsByMusicId } from "../../redux/modules/commentsSlice";
import { decodeToken } from "react-jwt";
import AddCommentForm from "./AddComment";
import Comment from "./Comment";
import styled from "styled-components";

const Comments = () => {
  const { musicId } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { data } = useSelector((state) => state.comments.commentsByMusicId);
  const token = localStorage.getItem("token");
  const payload = decodeToken(token);

  useEffect(() => {
    if (show) {
      dispatch(__getCommentsByMusicId(musicId));
    }
  }, [dispatch, musicId, show]);

  return (
    <WrapBox show={show}>
      {payload.userId !== "" ? (
        <CommentBtn
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "CANCEL" : " WRITING COMMENTS !"}
        </CommentBtn>
      ) : null}
      {show ? <AddCommentForm /> : null}
      <WrapBox>
        {data?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </WrapBox>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 700px;
  height: ${({ show }) => (show ? "400px" : "50px")};
  margin: 10px auto;
`;

const CommentBtn = styled.button`
  background-color: white;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
  padding: 7px;
  margin: 10px 250px;
  width: 200px;
  height: 40px;
  font-weight: bold;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default Comments;
