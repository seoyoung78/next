//상태 초기값 선언
const initalState = {
  color: "yellow"
};

//액션 타입 선언
const SET_COLOR = "color/setColor";

//액션 생성 함수 선언
export const createSetColorAction = (color) => {
  return {type: SET_COLOR, color};    //액션 객체의 역할 수행
};

//리듀스 선언
const colorReducer= (state = initalState, action) => {    //기본값 지정
  if(action.type === SET_COLOR) {
    return {color: action.color};
  } else {
    return state;
  }
};

export default colorReducer;