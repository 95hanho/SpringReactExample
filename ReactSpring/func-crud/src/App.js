import { useState, useEffect } from "react";
import Header from "./components/Header";
// import NormalCrud from "./components/NormalCrud";
import ReduxCrud from "./redux_componenets/ReduxCrud";

function App() {
  const numberState = useState(0);
  const number = numberState[0];
  const setNumber = numberState[1];
  // 라이프 사이클 정리
  // 기본모양
  useEffect(function () {
    // console.log("useEffect의 파라미터");
    return function () {
      // console.log("useEffect의 파라미터 리턴값");
    };
  });
  // 처음 1회만 실행
  useEffect(function () {
    // console.log("useEffect의 파라미터 빈객체");
    // 컴포넌트 자체가 사라질 때 실행됨
    return function () {
      // console.log("useEffect의 파라미터 리턴값 빈객체");
    };
  }, []);
  //
  // 특정 변수에만 반응
  useEffect(
    function () {
      // console.log("useEffect의 파라미터 [number]");
      return function () {
        // console.log("useEffect의 파라미터 리턴값 [number]");
      };
    },
    [number]
  );
  console.log("App.js render");
  return (
    <div className="App">
      <Header />
      {number}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        number 증가
      </button>
      <div>
        {/* <NormalCrud /> */}
        <ReduxCrud />
      </div>
    </div>
  );
}

export default App;
