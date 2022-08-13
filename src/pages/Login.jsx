import React from "react";
import styled from "styled-components";
import { Form } from "../components/Form";


const Login = () => {
   
    return (
    <>
      <Base>
        <Box>
          <BarTxt1>Login to your account</BarTxt1>
          <ContentBox>
            <Id>
                <input 
                    type="text"
                    placeholder="ID">
                </input>
            </Id>
            <PassWord>
                <input
                    type="text"
                    placeholder="PassWord">
                </input>
            </PassWord>
          </ContentBox>
          <Btn>
            <LoginBtn> LOGIN </LoginBtn>
            <br/>
            <ToLoginBtn>Would you like to sign up?</ToLoginBtn>
          </Btn>
        </Box>
      </Base>
    </>
  );
};

export default Login;

const BarTxt1 = styled.h2`
  color: rgb(79, 188, 238);
  //margin: 8px;
  margin-top: 50px;
  font-weight: 500;
`;

const Btn = styled.div`
  margin-bottom: 30px;
  //display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  padding: 35px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
`;

const Base = styled.div`
  background-color: #e9e9e9;
  height: 100vh;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

const Box = styled.div`
  border-top: 10px solid rgb(79, 188, 238);
  margin: auto;
  width: 400px;
  height: 470px;
  text-align: center;
  //border: 2px solid white;
  //border-radius: 10px;
  background-color: white;
`;

const Id = styled.div`
  font-size: medium;
  color: rgb(79, 188, 238);
  & input {
    border: 1px solid rgb(160, 160, 160);
    width: 250px;
    height: 40px;
    border-radius: 0px;
    padding-left: 10px;
    margin-bottom: 25px;
    margin-top: 4px;
    color: black;
    &:focus {outline: 1px solid rgb(79, 188, 238)};
  } 
  /* & input {
    border: 1px solid rgb(160, 160, 160);
    width: 300px;
    height: 40px;
    border-radius: 0px;
    padding-left: 10px;
    margin-bottom: 25px;
    margin-top: 4px;
    color: white;
  } */
`;
const PassWord = styled.div`
  font-size: medium;
  color: rgb(79, 188, 238);
  & input {
    border: 1px solid rgb(160, 160, 160);
    width: 250px;
    height: 40px;
    border-radius: 0px;
    padding-left: 10px;
    margin-top: 4px;
    color: black;
    &:focus {outline: 1px solid rgb(79, 188, 238)}
  }
`;
// const TitleInput = styled.input`
//   border: 1px solid rgb(160, 160, 160);
//   width: 400px;
//   height: 40px;
//   border-radius: 4px;
//   padding-left: 10px;
//   margin-bottom: 25px;
//   margin-top: 4px;
//   color: white;
// `;

const LoginBtn = styled.button`
  width: 270px;
  height: 40px;
  //padding: 10px;
  //margin: 5px 0px 0px 20px;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 0px;
  background-color: rgb(79, 188, 238);
  color: white;
  cursor: pointer;
  margin-bottom: 27px;
`;

const ToLoginBtn = styled.button`
    width: 400px;
    height: 70px;
    border: 2px solid #e9e9e9;
    cursor: pointer;
    color: #676767;
    //&:focus {outline: 1px solid rgb(79, 188, 238)};
    
`