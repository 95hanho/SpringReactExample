import React from "react";
import "../components/search.css";
import api from "../api";
import { connect } from "react-redux";
// import { read } from "../redux/userList";

class ReduxCrud extends React.Component {
  getUsers = () => {
    api
      .get("/api/user")
      .then((res) => {
        // console.log("유저 목록 조회 성공");
        // console.log(res.data);
        this.props.setUsers(res.data);
      })
      .catch((err) => {
        alert("유저 목록 조회 실패");
        console.log(err);
      });
  };
  render() {
    console.log("ReduxCrud render ======>>");
    const userList = this.props.userList;
    console.log(userList);
    if (userList.length !== 0) {
      return (
        <section>
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
            <tbody>
              {userList.map((user) => (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.nickName}</td>
                  <td>{user.phone}</td>
                  <td>{user.place}</td>
                  <td width="100px">
                    <button>수정</button>
                    <button>삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

const mapReduxStateToReactProps = (state) => ({
  userList: state.userList.value,
});
const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    setUsers: (value) => dispatch({ type: "userList/read", payload: value }),
    // 또는
    // getUsers: (value) => dispatch(read(value)),
  };
};

export default connect(
  // 리덕스의 state를 리액트의 props로 전달하는 역할
  // 어떤 객체를 반환하고, 이 객체는 파라미터 컴포넌트에 props로 전달된다.
  mapReduxStateToReactProps,
  // 리덕스의 Dispatch를 리액트의 props로 전달하는 역할
  mapReduxDispatchToReactProps
)(ReduxCrud);
