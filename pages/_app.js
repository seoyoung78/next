import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppMenu from 'AppMenu';
import AppHeader from 'AppHeader';
import { createStore } from 'redux';
import rootReducer from 'redux/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createSetAuthTokenAction, createSetUidAction } from 'redux/auth-reducer';
import { addAuthHeader } from "apis/axiosConfig";

// if(typeof window !== "undefined") {
//   if(sessionStorage.getItem("authToken")) {
//     addAuthHeader(sessionStorage.getItem("authToken"));
//   };
// }

function App({ Component, pageProps }) {
  const store = createStore(rootReducer, composeWithDevTools());

  useEffect(() => {
    //Reducx에 인증 정보 설정 - SessionStroage에 저장한 uid 불러와 redux에 저장
    store.dispatch(createSetUidAction(sessionStorage.getItem("uid") || ""));
    store.dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));
    //Axios에 인증 헤더 추가
    if(sessionStorage.getItem("authToken")) {
      addAuthHeader(sessionStorage.getItem("authToken"));
    };
  }, []);  

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App
