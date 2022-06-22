import React from "react";
import Search from "./Search";
import Insert from "./Insert";
import api from "../api";

export default class NormalCrud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }
  getUsers = () => {
    api
      .get("/api/user")
      .then((res) => {
        console.log("유저 목록 조회 성공");
        this.setState({
          userList: res.data,
        });
      })
      .catch((err) => {
        alert("유저 목록 조회 실패");
        console.log(err);
      });
  };
  render() {
    console.log("Normal_crud render =====>>");
    var userList = this.state.userList;
    if (userList.length !== 0) {
      return (
        <section>
          <Search userList={userList} reUserList={this.getUsers} />
          <hr></hr>
          <Insert reUserList={this.getUsers} />
        </section>
      );
    } else {
      console.log("로딩중");
      return <h2>Loding</h2>;
    }
  }
  componentDidMount() {
    this.getUsers();
  }
}
