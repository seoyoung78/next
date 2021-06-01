//상태 초기값 선언
const initalState = {
  uid: "",
  authToken: ""
};

//액션 타입 선언
const SET_UID = "auth/setUid";
const SET_AUTH_TOKEN = "auth/setAuthToken";

//액션 생성 함수 선언
export const createSetUidAction = (uid) => {
  return {type: SET_UID, uid};    //액션 객체의 역할 수행
};
export const createSetAuthTokenAction = (authToken) => {
  return {type: SET_AUTH_TOKEN, authToken};
};

//리듀스 선언
const authReducer= (state = initalState, action) => {    //기본값 지정
  if(action.type === SET_UID) {
    return {...state, uid: action.uid};
  } else if(action.type === SET_AUTH_TOKEN) {
    return {...state, authToken: action.authToken};
  } else {
    return state;
  }
};

export default authReducer;