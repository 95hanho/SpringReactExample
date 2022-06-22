import { useRef, useState } from "react";
import "./insert.css";
import api from "../api";

export default function Insert(props) {
  const [state, setState] = useState({
    name: "",
    nickName: "",
    phone: "",
    place: "",
  });
  const { name, nickName, phone, place } = state;
  const nameRef = useRef();
  const nickNameRef = useRef();
  const phoneRef = useRef();
  const placeRef = useRef();
  const initUser = () => {
    setState({
      name: "",
      nickName: "",
      phone: "",
      place: "",
    });
    nameRef.current.focus();
  };
  const setUser = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const insertUser = () => {
    if (!name) {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();
    } else if (!nickName) {
      alert("닉네임을 입력해주세요.");
      nickNameRef.current.focus();
    } else if (!phone) {
      alert("전화번호를 입력해주세요.");
      phoneRef.current.focus();
    } else if (!place) {
      alert("사는 곳을 입력해주세요.");
      placeRef.current.focus();
    } else {
      api
        .post("/api/user/create", state)
        .then((res) => {
          console.log(res.data);
          if (res.data === "success") {
            alert("유저추가성공!");
            initUser();
            props.reUserList();
          } else {
            alert("기타 문제 발생!");
          }
        })
        .catch((err) => {
          alert("서버문제로 인한 유저 추가 실패");
          console.log(err);
        });
    }
  };
  const enterPress = (e) => {
    if (e.key === "Enter") insertUser();
  };
  console.log("Insert render() ==========>>>>");
  return (
    <article>
      <div>
        <input
          name="name"
          placeholder="name"
          value={name}
          onChange={setUser}
          ref={nameRef}
          onKeyUp={enterPress}
        />
        <input
          name="nickName"
          placeholder="nickName"
          value={nickName}
          onChange={setUser}
          ref={nickNameRef}
          onKeyUp={enterPress}
        />
        <input
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={setUser}
          ref={phoneRef}
          onKeyUp={enterPress}
        />
        <input
          name="place"
          placeholder="place"
          value={place}
          onChange={setUser}
          ref={placeRef}
          onKeyUp={enterPress}
        />
        <button onClick={insertUser}>추가</button>
        <button onClick={initUser}>초기화</button>
      </div>
    </article>
  );
}
