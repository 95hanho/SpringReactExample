import {
  useState,
  // useEffect,
  useRef,
  // '같은 props로 렌더링이 자주일어나는 컴포넌트','렌더링에 리소스 소모가 큰 컴포넌트'
  // 클래스형의 shouldComponentUpdate와 유사하다.
  // memo,
  // 함수 연산량이 많을 때 이전 결과값을 재사용하는 목적
  // useMemo,
  // 함수가 재생성되는 것을 방지하기 위한 목적
  // useCallback,
  // useEffect는 렌더링 페인팅 후 실행되는 반면에
  // useCallback은 렌더링하고 페인팅하기 전에 실행된다
  // 페인팅의 변화가 있을 시 사용한다. 그외엔 무조건 useEffect사용
  useLayoutEffect,
} from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import api from "../api";

/*
// React.memo의 사용방법
function MyComponent(props) {
  // 컴포넌트 로직
}
function areEqual(prevProps, nextProps){
  // 전달되는 전 후 props의 비교로 false일시 렌더링되고 true일시 렌더링안됨
  // 리얼 props가 변경될 때만 실행됨
}
export default React.memo(MyComponent, areEqual);
export default React.memo(MyComponent); // 단순 이렇게 써도 전 후 props가 같으면 재렌더링안함
// React.useMemo, React.useCallback 사용법
const fnc = useMemo(함수, 변수배열);
const fnc = useCallback(함수, 변수배열);
*/

export default function SearchList(props) {
  let [firstUpdateClick, setFupdateClick] = useState(false);
  const [state, setState] = useState({
    modifyForm: false,
    name: props.user.name,
    nickName: props.user.nickName,
    phone: props.user.phone,
    place: props.user.place,
  });
  // console.log(state);
  const { modifyForm, name, nickName, phone, place } = state;
  const nickNameRef = useRef();
  const phoneRef = useRef();
  const placeRef = useRef();
  useLayoutEffect(() => {
    console.log("useLayoutEffect ======>>>");
    // console.log(firstUpdateClick);
    if (firstUpdateClick) {
      nickNameRef.current.focus();
      setFupdateClick(false);
    }
    return () => {
      console.log("useLayoutEffect return ------------>>");
    };
  }, [firstUpdateClick]);
  const userDelete = (name) => {
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
                  props.reUserList();
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
  const userUpdate = () => {
    if (!nickName) {
      alert("닉네임을 입력해주세요.");
      nickNameRef.current.focus();
    } else if (!phone) {
      alert("전화번호를 입력해주세요.");
      phoneRef.current.focus();
    } else if (!place) {
      alert("사는 곳을 입력해주세요.");
      placeRef.current.focus();
    } else if (
      nickName === props.user.nickName &&
      phone === props.user.phone &&
      place === props.user.place
    ) {
      alert("변경 내용이 없습니다.");
    } else {
      console.log("유저 업데이트");
      api
        .post("/api/user/update", state)
        .then((res) => {
          console.log(res.data);
          if (res.data === "success") {
            alert(`${name} 유저 업데이트 성공!`);
            props.reUserList();
            setState({
              ...state,
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
  const setUser = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const enterPress = (e) => {
    if (e.key === "Enter") userUpdate();
  };
  const initUser = () => {
    setState({
      ...state,
      modifyForm: false,
      nickName: props.user.nickName,
      phone: props.user.phone,
      place: props.user.place,
    });
  };
  console.log("SearchList.js render ===========>>>");
  // 수정폼 on
  if (modifyForm) {
    return (
      <tr>
        <td>{props.user.name}</td>
        <td>
          <input
            name="nickName"
            placeholder="nickName"
            value={nickName}
            onChange={setUser}
            ref={nickNameRef}
            onKeyUp={enterPress}
          />
        </td>
        <td>
          <input
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={setUser}
            ref={phoneRef}
            onKeyUp={enterPress}
          />
        </td>
        <td>
          <input
            name="place"
            placeholder="place"
            value={place}
            onChange={setUser}
            ref={placeRef}
            onKeyUp={enterPress}
          />
        </td>
        <td width="100px">
          <button onClick={userUpdate}>완료</button>
          <button onClick={initUser}>취소</button>
        </td>
      </tr>
    );
  }
  // 수정폼 off
  else {
    return (
      <tr>
        <td>{props.user.name}</td>
        <td>{props.user.nickName}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.place}</td>
        <td width="100px">
          <button
            onClick={() => {
              // firstUpdateClick = true;
              setFupdateClick(true);
              setState({
                ...state,
                modifyForm: true,
              });
            }}
          >
            수정
          </button>
          <button onClick={(e) => userDelete(props.user.name)}>삭제</button>
        </td>
      </tr>
    );
  }
}
