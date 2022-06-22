import React, { Component } from "react"; // 클래스 방식 추가
import Header from "./components/Header";
// import NormalCrud from "./components/NormalCrud";
import ReduxCrud from "./redux_componenets/ReduxCrud";
//import axios from "axios";

class App extends Component {
  render() {
    console.log("App.js render");
    return (
      <div className="App">
        <Header />
        <div>
          {/* <NormalCrud /> */}
          <ReduxCrud />
        </div>
      </div>
    );
  }
  // 라이프 사이클 정리
  componentWillUnmount() {
    // console.log("componentWillUnmount");
    /*
    componentWillUnmount()는 컴포넌트가 마운트 해제되어 제거되기 직전에
     호출됩니다. 이 메서드 내에서 타이머 제거, 네트워크 요청 취소, 
     componentDidMount() 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을
      수행하세요.
    이제 컴포넌트는 다시 렌더링되지 않으므로, componentWillUnmount() 내에서
     setState()를 호출하면 안 됩니다. 컴포넌트 인스턴스가 마운트 해제되고 
     나면, 절대로 다시 마운트되지 않습니다.
    */
  }
  shouldComponentUpdate(a, b, c) {
    // 재렌더링 시 경우에 따라 렌더링막을 수가 있음
    // console.log("shouldComponentUpdate");
    // 파라미터 2개이고 첫번 째엔 props값이
    // 두번째엔 state값이 들어있음
    // console.log("a", a);
    // console.log("b", b);
    // 3번째엔 없음
    // console.log("c", c);
    return true;
  }
  componentDidUpdate(a, b, c) {
    // 재 렌더링 되고 나서 실행됨
    // console.log("componentDidUpdate");
    // 파라미터 3개이고
    // 첫 번째엔 props값이
    // 두 번째엔 state값이 들어있음
    // 세 번째엔 getSnapshotBeforeUpdate에서의 반환값이 들어감
    // console.log("a", a);
    // console.log("b", b);
    // console.log("c", c);
  }
  componentDidCatch() {
    // console.log("componentDidCatch");
    /*
    이 생명주기 메서드는 자손 컴포넌트에서 오류가 발생했을 때에 
    호출되며, 2개의 매개변수를 전달받습니다.
    (error, info)
    error : 발생한오류 
    info : 어떤 컴포넌트가 오류를 발생시켰는지에 대한 정보를 
            포함한 componentStack 키를 갖고 있는 객체
    */
  }
  componentDidMount(a, b, c) {
    // 렌더링 되고 나서 처음실행됨
    // console.log("componentDidMount");
    // 파라미터 값은 없음~~
    // console.log("a", a);
    // console.log("b", b);
    // console.log("c", c);
  }
  getSnapshotBeforeUpdate(a, b, c) {
    // 재 렌더링 되고 componentDidUpdate 전에 실행됨
    //  DOM으로부터 스크롤 위치 등과 같은 정보를 이후 변경되기 전에 얻을 수 있습니다.
    // console.log("getSnapshotBeforeUpdate");
    // 파라미터 2개이고 첫번 째엔 props값이
    // 두번째엔 state값이 들어있음
    // console.log("a", a);
    // console.log("b", b);
    // 3번째엔 없음
    // console.log("c", c);
    // 반환값으로는 componentDidUpdate에 전달할 값을 반환함
    return null;
  }
}

export default App;
