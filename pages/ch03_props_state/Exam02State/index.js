import ComAClass from "./ComAClass";
import ComAFun from "./ComAFun";
import ComBClass from "./ComBClass";
import ComBFun from "./ComBFun";
import ComCFun from "./ComCFun";
import ComCFunWithImmer from "./ComCFunWithImmer";

function Exam02State(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam02State
      </div>
      <div className="card-body">
        <ComAClass />
        <div className="mt-3"/>
        <ComAFun />
        <div className="mt-3"/>
        <ComBClass/>
        <div className="mt-3"/>
        <ComBFun/>
        <div className="mt-3"/>
        <ComCFun/>
        <div className="mt-3"/>
        <ComCFunWithImmer/>
      </div>
    </div>
  );
}

export default Exam02State;