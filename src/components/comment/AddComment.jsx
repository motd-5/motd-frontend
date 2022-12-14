import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { decodeToken } from "react-jwt";
import axios from "axios";

const AddCommentForm = () => {
  const { musicId } = useParams();
  const token = localStorage.getItem("token");
  const payload = decodeToken(token);

  const [comment, setComment] = useState({
    nickname: payload.nickname,
    content: "",
  });

  const onAddCommentButtonHandler = async (event) => {
    console.log(event);
    event.preventDefault();
    if (comment.content.trim() === "") {
      return alert("댓글을 입력해주세요.");
    } else {
      try {
        const data = await axios.post(
          "http://3.34.47.211/api/comments",
          {
            musicId: musicId,
            content: comment.content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setComment({
          nickname: payload.nickname,
          content: "",
        });
        return window.location.reload();
      } catch (err) {
        console.log(err);
      }

      //dispatch(__addComment({ musicId, ...comment, token }));
    }
  };
  // useEffect(() => {
  //   onAddCommentButtonHandler();
  // }, []);

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <CommentForm onSubmit={(event) => onAddCommentButtonHandler(event)}>
      <CommentInput
        placeholder="댓글을 추가하세요(30자 이내)"
        value={comment.content}
        name="content"
        type="text"
        maxLength={30}
        onChange={onChangeInputHandler}
      />
      <Button
        type="submit"
        onClick={(event) => onAddCommentButtonHandler(event)}
      >
        ADD
      </Button>
    </CommentForm>
  );
};

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0px auto;
`;
const CommentInput = styled.input`
  margin: 0px 20px 0px 50px;
  height: 30px;
  width: 250px;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: white;
  width: 50px;
  border: 0px;
  font-size: 20px;
  border-radius: 10px;
  padding: 8px;
  margin: 10px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;

export default AddCommentForm;
