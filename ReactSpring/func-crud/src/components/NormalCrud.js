import { useState, useEffect } from "react";
import Search from "./Search";
import Insert from "./Insert";
import api from "../api";

export default function NormalCrud(props) {
  const [userList, setUserList] = useState([]);
  let getUsers = () => {
    api
      .get("/api/user")
      .then((res) => {
        console.log("유저 목록 조회 성공");
        setUserList(res.data);
      })
      .catch((err) => {
        alert("유저 목록 조회 실패");
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log("Normal_crud render =====>>");
  if (userList.length !== 0) {
    return (
      <section>
        <Search userList={userList} reUserList={getUsers} />
        <hr></hr>
        <Insert reUserList={getUsers} />
      </section>
    );
  } else {
    console.log("로딩중");
    return <h2>Loding</h2>;
  }
}
