import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import api from "../api";

export default class SearchList extends React.Component {
  constructor(props) {
    // console.log("SearchList.js constructor");
    super(props);
    this.firstUpdateClick = false;
    this.state = {
      modifyForm: false,
      name: props.user.name,
      nickName: props.user.nickName,
      phone: props.user.phone,
      place: props.user.place,
    };
    this.nickNameRef = React.createRef();
    this.phoneRef = React.createRef();
    this.placeRef = React.createRef();
  }
  userDelete = (name) => {
    // confirm 리액트에서 안먹음 ㅅㅂㅅㅂㅅㅂㅅㅂㅅㅂ
    // const option = Window.confirm("" + name + " 유저를 삭제하시겠습니까?");
    confirmAlert({
      title: "유저삭제확인",
      message: `${name} 유저를  삭제하시겠습니까?`,
      buttons: [
        {
          label: "네",
          onClick: () => {
            api
              .post("/api/user/delete", { name })
              .then((res) => {
                console.log(res.data);
                if (res.data === "success") {
                  alert(`${name}를 유저를 삭제하였습니다.`);
                  this.props.reUserList();
                } else {
                  alert("기타 문제 발생!");
                }
              })
              .catch((err) => {
                console.log(err);
                alert("서버문제로 인한 유저 삭제 실패");
              });
          },
        },
        {
          label: "아니요",
        },
      ],
    });
  };
  userUpdate = () => {
    if (!this.state.nickName) {
      alert("닉네임을 입력해주세요.");
      this.nickNameRef.current.focus();
    } else if (!this.state.phone) {
      alert("전화번호를 입력해주세요.");
      this.phoneRef.current.focus();
    } else if (!this.state.place) {
      alert("사는 곳을 입력해주세요.");
      this.placeRef.current.focus();
    } else if (
      this.state.nickName === this.props.user.nickName &&
      this.state.phone === this.props.user.phone &&
      this.state.place === this.props.user.place
    ) {
      alert("변경 내용이 없습니다.");
    } else {
      console.log("유저 업데이트");
      api
        .post("/api/user/update", this.state)
        .then((res) => {
          console.log(res.data);
          if (res.data === "success") {
            alert(`${this.state.name} 유저 업데이트 성공!`);
            this.props.reUserList();
            this.setState({
              modifyForm: false,
            });
          } else {
            alert("기타 문제 발생!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  setUser = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  enterPress = (e) => {
    if (e.key === "Enter") this.userUpdate();
  };
  initUser = () => {
    this.setState({
      modifyForm: false,
      nickName: this.props.user.nickName,
      phone: this.props.user.phone,
      place: this.props.user.place,
    });
  };
  render() {
    console.log("SearchList.js render ===========>>>");
    // 수정폼 on
    if (this.state.modifyForm) {
      return (
        <tr>
          <td>{this.props.user.name}</td>
          <td>
            <input
              name="nickName"
              placeholder="nickName"
              value={this.state.nickName}
              onChange={this.setUser}
              ref={this.nickNameRef}
              onKeyUp={this.enterPress}
            />
          </td>
          <td>
            <input
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={this.setUser}
              ref={this.phoneRef}
              onKeyUp={this.enterPress}
            />
          </td>
          <td>
            <input
              name="place"
              placeholder="place"
              value={this.state.place}
              onChange={this.setUser}
              ref={this.placeRef}
              onKeyUp={this.enterPress}
            />
          </td>
          <td width="100px">
            <button onClick={this.userUpdate}>완료</button>
            <button onClick={this.initUser}>취소</button>
          </td>
        </tr>
      );
    }
    // 수정폼 off
    else {
      return (
        <tr>
          <td>{this.props.user.name}</td>
          <td>{this.props.user.nickName}</td>
          <td>{this.props.user.phone}</td>
          <td>{this.props.user.place}</td>
          <td width="100px">
            <button
              onClick={() => {
                this.firstUpdateClick = true;
                this.setState({ modifyForm: true });
              }}
            >
              수정
            </button>
            <button onClick={(e) => this.userDelete(this.props.user.name)}>
              삭제
            </button>
          </td>
        </tr>
      );
    }
  }
  componentDidUpdate(props, state, snapShot) {
    if (this.firstUpdateClick) {
      this.nickNameRef.current.focus();
      this.firstUpdateClick = false;
    }
  }
}
