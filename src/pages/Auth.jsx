//회원가입
import React from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Auth = () => {
    const navigate = useNavigate();
   
    const [userEmail, setUserEmail] = useState("");
    const [userPw, setUserPw] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [nickname, setNickname] = useState("");

    const [data, setData] = useState({
      email: "",
      Password: "",
      confirmPw: "",
      nickname: "",
    })

    const [userEmailError, setUserEmailError] = useState(false);
    const [userPwError, setUserPwError] = useState(false);
    const [confirmPwError, setConfirmPwError] = useState(false);
    const [nicknameError, setNickNameError] = useState(false);

    const onChangeUserEmail = (e) => {
      const userEmailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //a~z, 0~9, @필수, .뒤에 2,3글자 더 필요
      if (!e.target.value || userEmailRegex.test(e.target.value))
        setUserEmailError(false);
      else setUserEmailError(true);
      setUserEmail(e.target.value);
      setData({ ...data, email: e.target.value })
    };

    const onChangeUserPw = (e) => {
      const userPwRegex = /^[A-Za-z0-9]{4,12}$/ //a~z, 0~9로 시작하는 4~12자리 비번을 만들 수 있음 
      if (!e.target.value || userPwRegex.test(e.target.value))
        setUserPwError(false);
      else setUserPwError(true);

      if (!confirmPw || e.target.value === confirmPw)
        setConfirmPwError(false);
      else setConfirmPwError(true);
      setUserPw(e.target.value);
      setData({ ...data, password: e.target.value });
    };

    const onChangeConfirmPw = (e) => {
      if (userPw === e.target.value) setConfirmPwError(false);
      else setConfirmPwError(true);
      setConfirmPw(e.target.value);
    };
    
    const onChangeUserNickname = (e) => {
      const nicknameRegex = /^[가-힣]{2,6}$/; //한글로만 이뤄진 문자만으로 2~6자리 닉네임을 만들 수 있음
      if (!e.target.value || nicknameRegex.test(e.target.value))
        setNickNameError(false);
      else setNickNameError(true);
        setNickname(e.target.value);
        setData({ ...data, nickname: e.target.value });
    };

    const onSubmit = async () => {
      if (!userEmail) setUserEmailError(true);
      if (!userPw) setUserPwError(true);
      if (!confirmPw) setConfirmPwError(true);
      if (!nickname) setNickNameError(true);

      // if (userEmail && userPw && nickname && confirmPw)  // return true에서 멈춤
      //   return true;
      if (userEmailError) 
        return;
      if (!userEmail|| !nickname || !userPw || !confirmPw) {
        return alert("조건에 맞게 입력해주세요")
      }
    if (nicknameError) {
      return;
    }
    if (userPwError) return;
    if (confirmPwError) {
      return;
    }
    alert("회원가입에 성공하셨습니다");
    
    await axios.post("http://3.34.47.211/api/join",data).then((response)=> {
      console.log(response)
      if (response.data.result === true) {
        navigate("/login");
        localStorage.setItem('email', JSON.stringify({a:1, b:2}))
        localStorage.setItem('password', JSON.stringify({a:1, b:2}))
        localStorage.setItem('nickname', JSON.stringify({a:1, b:2}))
        // JSON.parse(localStorage.getItem('json')
        // {a:1, b:2})
      }
    });
  };
    return (
    <>
    <Header />
      <Base>
        <Box>
          <BarTxt1>Sign Up</BarTxt1>
          <ContentBox>
            <Email>
                <input 
                    type="text"
                    placeholder="E-mail"
                    value= {userEmail}
                    onChange={onChangeUserEmail}
                    >
                </input>
                {userEmailError && (
                  <div style = {{ color: "blue" }}>이메일 형식으로 입력해주세요.</div>
                )}
            </Email>
            <Passwords>
              <PassWord>
                  <input
                      type="text"
                      placeholder="PassWord"
                      value={userPw}
                      onChange={onChangeUserPw}
                      maxLength= {12}
                      minLength={4}
                      >
                  </input>
                  {userPwError && (
                    <div style={{ color: "blue" }}>영문과 숫자로 이루어진 4~12자 비밀번호를 설정해주세요. (특수문자 불가)</div>
                  )}
              </PassWord>
              <PassWordConfirm>
                  <input
                      type="text"
                      placeholder="Confirm PassWord"
                      value={confirmPw}
                      onChange={onChangeConfirmPw}
                      >
                  </input>
                  {confirmPwError && (
                    <div style={{ color: "blue"}}>비밀번호가 일치하지 않습니다</div>
                  )}
              </PassWordConfirm>
            </Passwords>
            <NickName>
                <input
                    type="text"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={onChangeUserNickname}
                    minLength={2}
                    maxLength={6}
                    >
                </input>
                {nicknameError && (
                    <div style={{ color: "blue"}}>한글 2~6자로 입력해주세요</div>
                  )}
            </NickName>
          </ContentBox>
          <Btn>
            <CreateAccountBtn
              onClick={onSubmit}
            > Create Account </CreateAccountBtn>
            <br/>
            <ToLoginBtn
            onClick={()=>{
              navigate("/login");
            }}>
              Do you want to Log in?
            </ToLoginBtn>
          </Btn>
        </Box>
      </Base>
    </>
  );
};

export default Auth;

const Passwords = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarTxt1 = styled.h2`
  color: rgb(79, 188, 238);
  //margin: 8px;
  margin-top: 50px;
  font-weight: 500;
  margin-bottom: -20px;
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
  height: 600px;
  text-align: center;
  //border: 2px solid white;
  //border-radius: 10px;
  background-color: white;
  margin-top: 30px;
`;

const Email = styled.div`
  font-size: medium;
  color: rgb(79, 188, 238);
  & input {
    border: 1px solid rgb(160, 160, 160);
    width: 250px;
    height: 40px;
    border-radius: 0px;
    padding-left: 10px;
    margin-bottom: 0px;
    margin-top: 4px;
    color: black;
    &:focus {outline: 1px solid rgb(79, 188, 238)};
  } 
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
    margin-bottom: 0px;
    margin-top: 20px;
    color: black;
    &:focus {outline: 1px solid rgb(79, 188, 238)};
  }
`;
const PassWordConfirm = styled.div`
  font-size: medium;
  color: rgb(79, 188, 238);
  & input {
    border: 1px solid rgb(160, 160, 160);
    width: 250px;
    height: 40px;
    border-radius: 0px;
    padding-left: 10px;
    margin-bottom: 0px;
    margin-top: 20px;
    color: black;
    &:focus {outline: 1px solid rgb(79, 188, 238)};
  }
`;
const NickName = styled.div`
  font-size: medium;
  color: rgb(79, 188, 238);
  margin-bottom: -30px;
  & input {
    border: 1px solid rgb(160, 160, 160);
    width: 250px;
    height: 40px;
    border-radius: 0px;
    padding-left: 10px;
    margin-bottom: 10px;
    margin-top: 20px;
    color: black;
    &:focus {outline: 1px solid rgb(79, 188, 238)};
  }
`;

const CreateAccountBtn = styled.button`
  width: 270px;
  height: 40px;
  //padding: 10px;
  //margin: 5px 0px 0px 20px;
  border: 2px solid rgb(79, 188, 238);
  border-radius: 0px;
  background-color: rgb(79, 188, 238);
  color: white;
  cursor: pointer;
  margin-bottom: 35px;
`;

const ToLoginBtn = styled.button`
    width: 400px;
    height: 70px;
    border: 2px solid #e9e9e9;
    cursor: pointer;
    color: #676767;
`


