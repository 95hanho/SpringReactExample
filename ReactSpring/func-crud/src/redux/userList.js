import { createSlice } from "@reduxjs/toolkit";
// import api from "../api";

export const userListSlice = createSlice({
  // 리듀서의 이름
  name: "userList",
  // 들어갈 데이터의 초기값
  initialState: {
    value: [],
  },
  // 상태가 변하면 어떻게 실행될지 정하는 부분
  reducers: {
    read: (state, action) => {
      state.value = action.payload;
      /*
      api
        .get("/api/user")
        .then((res) => {
          state.value = res.data;
        })
        .catch((err) => {
          alert("유저 목록 조회 실패");
          console.log(err);
        });
      */
    },
  },
});

export const { read } = userListSlice.actions;

export default userListSlice.reducer;
