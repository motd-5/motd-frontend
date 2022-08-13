import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentsSlice";

const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const [comment, setComment] = useState({
    nickname: "susu",
    content: "",
  });

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    if (comment.content.trim() === "") {
      return alert("댓글을 입력해주세요.");
    }
    dispatch(__addComment({ musicId: id, ...comment }));
    setComment({
      nickname: "",
      content: "",
    });
  };

  const onChangeInputHandler = (event) => {
   const {name, value} = event.target;
   setComment({
    ...comment,
  [name]: value,
})
  };

  return (
    <form onSubmit={onAddCommentButtonHandler}>
      <input
        placeholder="댓글을 추가하세요"
        value={comment.content}
        name="content"
        type="text"
        onChange={onChangeInputHandler}
      />
      <button type="submit" onClick={onAddCommentButtonHandler}>
        추가하기
      </button>
    </form>
  );
};

export default AddCommentForm;
