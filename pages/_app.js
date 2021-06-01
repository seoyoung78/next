import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppMenu from 'AppMenu';
import AppHeader from 'AppHeader';
import { createStore } from 'redux';
import rootReducer from 'redux/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createSetAuthTokenAction, createSetUidAction } from 'redux/auth-reducer';
import { addAuthHeader } from "apis/axiosConfig";
import { createWrapper } from "next-redux-wrapper";

//서버 쪽에서 sessionStorage가 없기 때문에 에러가 나기 때문에
//브라우저(클라이언트)에서 반드시 실행해야할 코드
if(typeof window !== "undefined") {
  //Axios에 인증 헤더 추가
  if(sessionStorage.getItem("authToken")) {
    addAuthHeader(sessionStorage.getItem("authToken"));
  };
};

function App({ Component, pageProps }) {
  const dispatch = useDispatch();
  
  //비동기로 실행하기 대문에 코드가 다 실행되기 전에 다른 AXIOS 통신이 발생할 수 있음
  //store 이용 코드만 작성 
  useEffect(() => {
    //Reducx에 인증 정보 설정 - SessionStroage에 저장한 uid 불러와 redux에 저장
    dispatch(createSetUidAction(sessionStorage.getItem("uid") || ""));
    dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));
  }, []);  

  return (
    <div className="d-flex flex-column vh-100">
      <AppHeader />
      <div className="flex-grow-1 container-fluid">
        <div className="row h-100">
          <div className="col-md-6 col-lg-4 p-3 bg-dark">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1" style={{ height: "0px", overflowY: "auto", overflowX: "hidden" }}>
                <AppMenu />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-8 p-3">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1 overflow-auto pr-3" style={{ height: "0px" }}>
                {/* AppRoute와 같이 화면 이동하여 컴포넌트가 들어갈 자리 */}
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//store 만드는 함수
const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};
const wrapper = createWrapper(configureStore);

//wrapper가 컴포넌트를 감싸도록(provider 역할)
export default wrapper.withRedux(App);