import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
    
  const [userinfo, setUserInfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다.
  // const [isLogin, setIsLogin] = useState(false);

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value) //(e) state를 바꿔줌  "" => e.target.value로
    console.log(inputEmail)
    //setUserInfo(userinfo.email=inputEmail)
  }          

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
    console.log(inputPw)
    //setUserInfo(userinfo.password=inputPw)
  }

  const onSubmitHandler = async (userinfo) => {
    console.log(inputEmail, inputPw)
    try{
      const response = await axios.post("http://3.34.47.211/api/login", {
        email: inputEmail,
        password: inputPw
      },
       { headers: {
        "Content-type": "application/json; charset=UTF-8",
       //"Access-Control-Allow-Origin:*"
       }}
       
      )
      // .then((response) => {
      //   if (response.email && response.password) {
      //     navigate("/auth")
      //   }
      // })

    console.log(response)
    alert('로그인에 성공하셨습니다!')
    } catch(err){
      console.log(err)
      alert('로그인에 실패하셨습니다!')
    }
  };

  // if (email === "" || password === "") {
  //   window.alert("이메일과 비밀번호를 입력해주세요.")
  //   return;
  // } if (!emailCheck(id)) {
  //   window.alert("이메일 형식이 맞지 않습니다.")
  // }
  // dispatch(userinfo.login)



  // const onClickLogin = () => {
  //   console.log('click login')
  // }

  	// 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //   axios.post('/login/user_inform')
    //   .then(response => console.log(response))
    //   .catch()
    // }, [])
   
   
    return (
    <>
    <Header />
      <Base>
        <Box>
          <BarTxt1>Login to your account</BarTxt1>
          <ContentBox>
            <Email>
                <input 
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    name="input_email"
                    value={inputEmail}
                    onChange={handleInputEmail}>
                </input>
            </Email>
            <PassWord>
                <input
                    type="text"
                    id="password"
                    placeholder="PassWord"
                    name="input_pw"
                    value={inputPw}
                    onChange={handleInputPw}>
                </input>
            </PassWord>
          </ContentBox>
          <Btn>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitHandler(userinfo);
              }}>
              <LoginBtn
                // else if((state.id === '') || (state.pw === '')) {
                //   setState({
                //     id : '',
                //     passwd : '',
                //     error: '아이디와 비밀번호를 모두 입력해주세요',
                //   })
                // }
              > Sign In </LoginBtn>
            </form>
            <br/>
            <ToLoginBtn onClick={() => {
              navigate("/auth");
            }}>Would you like to Sign Up?</ToLoginBtn>
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
  margin-top: 70px;
  //border: 2px solid white;
  //border-radius: 10px;
  background-color: white;
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
