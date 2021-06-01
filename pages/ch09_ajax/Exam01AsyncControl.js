import { useState } from "react";

//주어진 시작동안 딜레이된 후 promise 반환
function delayPromise(time) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, time);
  });
  return promise;
};

function Exam01AsyncControl(props) {
  const [loading, setLoading] = useState(false);

  /* const handleRequest = (event) => {
    setLoading(true);
    delayPromise(3000)
      .then(result => {})
      .catch(error => {})
      .finally(() => {
        setLoading(false);
      })
  }; */

  const handleRequest = async (event) => {
    setLoading(true);
    try {
      const result = await delayPromise(3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        Exam01AsyncControl
      </div>
      <div className="card-body">
        <button className="btn btn-sm btn-primary mr-2" onClick={handleRequest}>데이터 요청</button>
        <div className="mt-3">
          {loading === true?
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">로딩 중...</span>
          </div>
          :
          <div>로딩 완료</div>
          }
        </div>
      </div>
    </div>
  );
}

export default Exam01AsyncControl;