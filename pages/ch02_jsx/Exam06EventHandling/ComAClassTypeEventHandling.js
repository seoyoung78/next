import React from "react";

class ComAClassTypeEventHandling extends React.Component {
  constructor(props) {
    super(props);
    //방법1
    this.handleBtn1 = this.handleBtn1.bind(this);   //어디서 호출되던 this는 내 객체에서 찾을 수 있도록
    this.handleBtn2 = this.handleBtn2.bind(this);
  }

  method1() {
    console.log("method1() 실행");
  }

  //방법1
  handleBtn1(event) {
    console.log("버튼1이 클릭되었습니다.");
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }

  handleBtn2(event, x, y) {
    const result = x + y; 
    console.log("계산 결과: ", result);
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }

  //방법2
  handleBtn3 = (event) => {
    console.log("버튼3이 클릭되었습니다.");
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }

  handleBtn4 = (event, x, y) => {
    console.log("버튼4가 클릭되었습니다.");
    const result = x + y; 
    console.log("계산 결과: ", result);
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComAClassTypeEventHandling
        </div>
        <div className="card-body">
          <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼1</button>
          <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => this.handleBtn2(event, 3, 5)}>버튼2</button> {/* 매개값이 있는 함수의 경우 */}
          <button name="btn3" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn3}>버튼3</button>
          <button name="btn4" className="btn btn-info btn-sm mr-2" onClick={(event) => this.handleBtn4(event, 4, 6)}>버튼4</button> {/* 매개값이 있는 함수의 경우 */}
        </div>
      </div>
    );
  }
}

export default ComAClassTypeEventHandling;