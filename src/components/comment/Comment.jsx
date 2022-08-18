import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteComment,
  __updateComment,
} from "../../redux/modules/commentsSlice";
import { __getComment } from "../../redux/modules/commentSlice";
import axios from "axios";

const Comment = ({ comment }) => {
  const { musicId } = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [boo, setBoo] = useState(false);
  const [updatedComment, setUpdatedComment] = useState("");
  const [isShow, setIsShow] = useState(false);
  const token = localStorage.getItem("token");
  const { content } = useSelector((state) => state.comment);

  const onDelButHandler = async () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      try {
        const response = await axios.delete(
          `http://3.34.47.211/api/comments/${comment.commentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return window.location.reload();
      } catch (err) {
        return console.log(err);
      }
    } else {
      return;
    }
  };

  const onUpdatedBtnHandler = async () => {
    try {
      await axios.put(
        `http://3.34.47.211/api/comments/${comment.commentId}`,
        {
          content: updatedComment,
          musicId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return setEdit(false), window.location.reload();
    } catch (e) {
      return console.log(e);
    }
  };

  const getComment = async () => {
    try {
      const response = await axios.get(
        `http://3.34.47.211/api/comments?musicId=${musicId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeEditBtnHandler = (e) => {
    setEdit(true);
    getComment();
    setUpdatedComment(e.target.value);
  };

  const onCancelBtnHandler = () => {
    setEdit(false);
  };

  const onEditBtnHandler = () => {
    setEdit(true);
  };

  useEffect(() => {
    setUpdatedComment(content, token);
    setIsShow(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getComment();
    }, 300);

    setIsShow(false);
  }, [boo, isShow]);

  return (
    <div>
      {edit ? (
        <>
          <div>
            <CommentInput
              type="text"
              onChange={onChangeEditBtnHandler}
              maxLength={30}
              placeholder="수정할 내용을 입력해주세요(30자 이내)"
            />
          </div>
          <div>
            <Button onClick={onCancelBtnHandler}>CANCEL</Button>
            <Button onClick={onUpdatedBtnHandler}>ADD</Button>
          </div>
        </>
      ) : (
        <>
          <CommentBox>
            <Nickname>{comment.nickname}</Nickname>
            <Content>{comment.content}</Content>
            {token !== "" ? (
              <div>
                <Button onClick={onEditBtnHandler}>EDIT</Button>
                <Button onClick={onDelButHandler}>DELETE</Button>
              </div>
            ) : null}
          </CommentBox>
        </>
      )}
    </div>
  );
};

const CommentBox = styled.div`
  max-width: 700px;
  width: 100vw;
  height: 40px;
  margin: 10px auto;
  border: 1px solid rgb(79, 188, 238);
  border-radius: 10px;
  display: flex;
  padding: 20px;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  position: relative;
  top: 10px;
  left: 400px;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;
const CommentInput = styled.input`
  margin: 0px 20px 0px 200px;
  height: 30px;
  width: 250px;
  border: 1px solid rgb(79, 188, 238);
  border-radius: 5px;
`;
const Nickname = styled.p`
  font-size: 15px;
  position: relative;
  top: -20px;
`;
const Content = styled.p`
  font-size: 20px;
  position: relative;
  left: -20px;
`;

export default Comment;
