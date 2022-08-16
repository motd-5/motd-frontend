import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { __getPostsThunk } from "../../redux/modules/boardSlice";

const Boards = () => {
  const postList = useSelector((state) => state.board.posts);
  console.log(postList);

  useEffect(() => {
    __getPostsThunk();
  }, []);

  return (
    <>
      {postList.map((post) => (
        <Board key={post.id}>
          <NicknameBox>
            <p>{post.nickname}</p>
          </NicknameBox>
          <div>
            <p>{post.title}</p>
          </div>
        </Board>
      ))}
    </>
  );
};

const Board = styled.div`
  width: 700px;
  height: 60px;
  border-bottom: 2px solid rgb(79, 188, 238);
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  &:hover {
    background-color: rgb(79, 188, 238);
    color: white;
  }
`;
const NicknameBox = styled.div`
  width: 100px;
  height: 40px;
  border-right: 1px solid rgb(79, 188, 238);
  margin: 10px;
  padding: 0px;
  text-align: center;
`;

export default Boards;
