import { useEffect } from "react";
import "../components/search.css";
import api from "../api";
import { useSelector, useDispatch } from "react-redux/es/exports";
// import { read } from "../redux/userList";
import Search from "../components/Search";
import Insert from "../components/Insert";

export default function ReduxCrud(props) {
  let dispatch = useDispatch();
  let userList = useSelector((state) => state.userList.value);
  let setUsers = (value) => {
    dispatch({ type: "userList/read", payload: value });
  };
  const getUsers = () => {
    api
      .get("/api/user")
      .then((res) => {
        // console.log("유저 목록 조회 성공");
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        alert("유저 목록 조회 실패");
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  // React Hook useEffect has a missing dependency: 'getUsers'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  // 해결이 안돼 ㅠㅠㅜㅠㅜㅠ
  console.log("ReduxCrud render ======>>");
  if (userList.length !== 0) {
    return (
      <section>
        <Search userList={userList} reUserList={getUsers} />
        <hr></hr>
        <Insert reUserList={getUsers} />
      </section>
      // <section>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>이름</th>
      //         <th>닉네임</th>
      //         <th>전화번호</th>
      //         <th>사는 곳</th>
      //         <th></th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {userList.map((user) => (
      //         <tr key={user.name}>
      //           <td>{user.name}</td>
      //           <td>{user.nickName}</td>
      //           <td>{user.phone}</td>
      //           <td>{user.place}</td>
      //           <td width="100px">
      //             <button>수정</button>
      //             <button>삭제</button>
      //           </td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </section>
    );
  } else {
    console.log("로딩중");
    return <h2>Loding</h2>;
  }
}
