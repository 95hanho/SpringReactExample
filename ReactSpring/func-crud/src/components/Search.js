import React from "react";
import "./search.css";
import SearchList from "./SearchList";

export default function Search(props) {
  const userTr = () => {
    var userTr = [];
    for (var user of props.userList) {
      //console.log(user);
      userTr.push(
        <SearchList user={user} key={user.name} reUserList={props.reUserList} />
      );
    }
    return userTr;
  };
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
      <tbody>{userTr()}</tbody>
    </table>
  );
}
