import { useState } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16);
}

function ComAFun(props) {
  const [state, setState] = useState({
    number: 0,
    color: "black"
  }); //Hook - 초기값 설정

  const addNumber = (event) => {
    setState({
      ...state,
      number: state.number + 1
    });
  };

  const changeColor = (event) => {
    setState({
      ...state,
      color: getRandomColor()
    })
  };

  return (
    <div className="card">
      <div className="card-header">
        ComAFun
      </div>
      <div className="card-body">
        <h3 style={{color: state.color}}>{state.number}</h3>
        <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자 증가</button>
        <button className="btn btn-info btn-sm mr-2" onClick={changeColor}>색깔 변경</button>
      </div>
    </div>
  );
}

export default ComAFun;