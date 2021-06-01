import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";
import { removeAuthHeader } from "apis/axiosConfig";

function AppHeader(props) {
  //Redux를 이용할 경우
  const globalUid = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const logout = (evnet) => {
    //Redux를 이용할 경우
    dispatch(createSetUidAction(""));
    dispatch(createSetAuthTokenAction(""));
    removeAuthHeader();

    //SessionStorage에 인증 내용 제거
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("authToken");
  };

  //Link에 classname 사용x
  return (
    <nav className="navbar bg-dark navbar-dark text-white font-weight-bold 
                    justify-content-between">
      <Link href="/">  
        <a className="navbar-brand">
          <img src="/logo512.png" alt="" width="30" height="30" className="align-top"/>
          {' '} React with NEXT
        </a>
      </Link>
      <div>
        {globalUid === ""?
          <Link href="/">
            <a className="btn btn-success btn-sm">로그인</a>
          </Link>
          :
          <div className="d-flex align-items-center">
            <span className="mr-2">User ID: {globalUid}</span>
            <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
          </div>
        }
      </div>
    </nav>
  );
}

export default AppHeader;