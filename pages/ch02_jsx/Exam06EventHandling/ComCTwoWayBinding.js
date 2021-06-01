import { useState } from "react";

function ComCTwoWayBinding(props) {
  const [content, setContent] = useState("");
  //content는 상태 변수, setContent는 상태 변수를 변경시키는 함수(setter)

  const handleChange = (event) => {
    //console.log(event.target);
    setContent(event.target.value);
    console.log(content);
  };

  return (
    <div className="card">
      <div className="card-header">
        ComCTwoWayBinding
      </div>
      <div className="card-body">
        <div>
          입력1: <input type="text" onChange={handleChange} value={content}/>
        </div>
        <div>
          입력2: <input type="text"  onChange={handleChange} value={content}/>
        </div>
      </div>
    </div>
  );
}

export default ComCTwoWayBinding;