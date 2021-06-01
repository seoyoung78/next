import React from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16);
}

class ComAClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      color: "black"
    };
    this.addNumber = this.addNumber.bind(this);
  }

  addNumber(event) {
    this.setState({
      ...this.state,  //원래 객체의 내용을 넣어 줌
      number: this.state.number + 1
    }, () => {
      console.log("이후: ", this.state.number); //변경 확인, 상태 함수 변화 후 작업해야할 경우
    });  //새로운 상태 객체를 넣어 줌 - 이전 상태와 비교 역할
    console.log("이전: ", this.state.number);
  }

  //화살표 함수 - 속성으로 선언
  changeColor = (event) => {
    this.setState({
      ...this.state,
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <h3 style={{color: this.state.color}}>{this.state.number}</h3>
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={this.changeColor}>색깔 변경</button>
        </div>
      </div>
    );
  }
}

export default ComAClass;