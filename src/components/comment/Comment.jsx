import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    __deleteComment,
    __updateComment,
  } from "../../redux/modules/commentsSlice";
  import {
    clearComment,
    globalEditModeToggle,
    __getComment,
  } from "../../redux/modules/commentSlice";

const Comment = ({comment}) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [editComment, setEditComment] = useState("");

    const { content } = useSelector((state) => state.comment.data);
    const { isGlobalEditmode } = useSelector((state) => state.comment);

    
  const onDeleteButtonHandler = () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      dispatch(__deleteComment(comment.id));
    } else {
      return;
    }
  };

  const onUpdateButtonHandler = () => {
    dispatch(
      __updateComment({
        id: comment.id,
        content: editComment,
        nickname: comment.nickname,
        musicId: id,
      })
    );
    setIsEdit(false);
    dispatch(globalEditModeToggle(false));
  };

  const onChangeEditButtonHandler = () => {
    setIsEdit(true);
    dispatch(__getComment(comment.id));
    dispatch(globalEditModeToggle(true));
  };

  const onCancelButtonHandler = () => {
    setIsEdit(false);
    dispatch(clearComment());
    dispatch(globalEditModeToggle(false));
  };

  useEffect(() => {
    setEditComment(content);
  }, [content]);


    
    useEffect(()=>{

    },[]);
const onChangeEditInput = (e) => {
 setEditComment(e.target.value);
}


  
    return (
        <div>
         {isEdit ? 
         <>
         <div>
            <input
            type="text"
            value={editComment}
            onChange={onChangeEditInput}/>
         </div>
         <div>
            <button
            onClick={onCancelButtonHandler}>
                취소</button>
                <button
                onClick={onUpdateButtonHandler}>
                    저장</button>
         </div>
         </>
         :
         <>
         <div>
            <p>{comment.nickname}</p>
            <p>{comment.content}</p>
         </div>
         <div>
            <button
            disabled={isGlobalEditmode}
            onClick={onChangeEditButtonHandler}>
                수정
            </button>
            <button
            disabled={isGlobalEditmode}
            onClick={onDeleteButtonHandler}>
                삭제
            </button>
         </div>
         </>
        }
        </div>
    );
};

export default Comment;