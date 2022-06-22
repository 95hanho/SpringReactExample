import React from "react";
import "./search.css";
import SearchList from "./SearchList";

export default class Search extends React.Component {
  getUsers = () => {
    var userTr = [];
    for (var user of this.props.userList) {
      //console.log(user);
      userTr.push(
        <SearchList
          user={user}
          key={user.name}
          reUserList={this.props.reUserList}
        />
      );
    }
    return userTr;
  };
  componentDidMount() {}
  render() {
    console.log("==> Search render");
    return (
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>닉네임</th>
            <th>전화번호</th>
            <th>사는 곳</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.getUsers()}</tbody>
      </table>
    );
  }
}
