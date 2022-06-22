import React, { Component, createRef } from "react";
import "./insert.css";
import api from "../api";

export default class Insert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nickName: "",
      phone: "",
      place: "",
    };
    this.nameRef = createRef();
    this.nickNameRef = createRef();
    this.phoneRef = createRef();
    this.placeRef = createRef();
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  /*
  test() {
    console.log("test1");
    console.log(this);
  }
  test2 = () => {
    console.log("test2");
    console.log(this);
  };
  */
  initUser = () => {
    this.setState({
      name: "",
      nickName: "",
      phone: "",
      place: "",
    });
    this.nameRef.current.focus();
  };
  setUser = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  insertUser = () => {
    if (!this.state.name) {
      alert("이름을 입력해주세요.");
      this.nameRef.current.focus();
    } else if (!this.state.nickName) {
      alert("닉네임을 입력해주세요.");
      this.nickNameRef.current.focus();
    } else if (!this.state.phone) {
      alert("전화번호를 입력해주세요.");
      this.phoneRef.current.focus();
    } else if (!this.state.place) {
      alert("사는 곳을 입력해주세요.");
      this.placeRef.current.focus();
    } else {
      api
        .post("/api/user/create", this.state)
        .then((res) => {
          console.log(res.data);
          if (res.data === "success") {
            alert("유저추가성공!");
            this.initUser();
            this.props.reUserList();
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
  enterPress = (e) => {
    if (e.key === "Enter") this.insertUser();
  };
  render() {
    console.log("Insert render() ==========>>>>");
    return (
      <article>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.setUser}
            ref={this.nameRef}
            onKeyUp={this.enterPress}
          />
          <input
            name="nickName"
            placeholder="nickName"
            value={this.state.nickName}
            onChange={this.setUser}
            ref={this.nickNameRef}
            onKeyUp={this.enterPress}
          />
          <input
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.setUser}
            ref={this.phoneRef}
            onKeyUp={this.enterPress}
          />
          <input
            name="place"
            placeholder="place"
            value={this.state.place}
            onChange={this.setUser}
            ref={this.placeRef}
            onKeyUp={this.enterPress}
          />
          <button onClick={this.insertUser}>추가</button>
          <button onClick={this.initUser}>초기화</button>
        </div>
      </article>
    );
  }
}
