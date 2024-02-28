import React, { useEffect } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom"; //라이브러리 불러오기

import HomeView from "./views/HomeView";
import lenis from "./utils/lenis";
import link from "./utils/link";

const App=()=>{
  useEffect(()=>{
    lenis();
    link();
  },[]);
  
  //useEffect 함수는 컴퍼넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 리액트 훅
  
  
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
      </Routes>

    </BrowserRouter>
  )
};

export default App;
//App 컴포넌트를 다른 파일에서 재사용할 수 있도록 내보내기(export) 설정을 하고 있습니다

/*
<BrowserRouter> : BrowserRouter는 라우팅을 적용하기 위한 컴포넌트입니다. 애플리케이션의 최상위 컴포넌트인 App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있도록 합니다.
<Routes> : Routes는 라우트들을 정의하는 컨테이너입니다. 
각각의 <Route> 컴포넌트들을 <Routes> 컴포넌트 내부에 정의하여 경로와 컴포넌트를 매핑합니다.                              
<Route path="/" element={<HomeView />} /> : 이 부분은 "/" 경로에 해당하는 <HomeView> 컴포넌트를 렌더링하도록 설정하는 것입니다. path 속성에는 경로를 지정하고, element 속성에는 해당 경로에 렌더링할 컴포넌트를 JSX 문법으로 전달합니다.

*/

//스무스 효과를 전체 소스에 넣어주기