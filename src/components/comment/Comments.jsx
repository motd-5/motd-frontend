import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getCommnetsByMusicId } from "../../redux/modules/commentsSlice";
import AddCommentForm from "./AddComment";
import Comment from "./Comment";

const Comments = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [isShow, setisShow] = useState(false);
    const { data } = useSelector((state) => state.comments.commentsByTodoId);

    useEffect(() => {
        if (isShow) {
          dispatch(__getCommnetsByMusicId(id));
        }
      }, [dispatch, id, isShow]);

    return(
        <div isShow={isShow}>
            <div
            onClick={()=>{setisShow(!isShow)}}>
                <p>
                    {isShow ? "댓글 내리기" : "댓글 보기"}
                </p>
            </div>
            <AddCommentForm/>
            <div>
                {data?.map((comment) => {
                    <Comment key = {comment.id} comment = {comment}/>
                })}
            </div>
        </div>
    );
};

export default Comments;